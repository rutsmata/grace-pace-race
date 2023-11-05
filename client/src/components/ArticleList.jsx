import { useEffect, useState } from "react"

import * as articleAPI from "../api/articleAPI"

import ArticleElement from "./ArticleElement"
import CreateArticleModal from "./CreateArticleModal"
import ArticleDetailsModal from "./ArticleDetailsModal"


export default function ArticleList (props) {
    const [articles, setArticles] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        articleAPI.getAll()
            .then(result => setArticles(result))
            .catch(err => console.log(err)) // implement error message
    }, []) 

    const createArticleClickHandler = () => {
        setShowCreate(true)
    }

    const hideCreateArticleModal = () => {
        setShowCreate(false)

    }

    const ArticleCreateHandler = async (e) => {
        e.preventDefault();
        
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const newArticle = await articleAPI.create(data);

        setArticles(state => [...state, newArticle]) 
        
        setShowCreate(false);
    }

    const articleDetailsClickHandler = async (articleId) => {
        // const articleDetails = await articleAPI.getOne(articleId);
        setSelectedArticle(articleId);
        setShowDetails(true);

    }

    return (

        <div>

            <h1>Новини</h1>
            <div>
                {articles.map(article => (
                    <ArticleElement
                    key={article._id}
                    articleId={article._id}
                    title={article.title}
                    description={article.description}
                    type={article.type}
                    author={article.author}
                    createdAt={article.createdAt}
                    img={article.img}
                    comments={article.comments}
                    onDetailsClick={articleDetailsClickHandler}

                    />     
                    ))}

            </div>

            <button className="btn btn-primary btn-block my-4" onClick={createArticleClickHandler}> Създай новина</button>
            
            {showCreate && (
                <CreateArticleModal 
                    onClose={hideCreateArticleModal}
                    onCreate={ArticleCreateHandler}
                />
            )}

            {showDetails && (
                <ArticleDetailsModal 
                    onClose={() => setShowDetails(false)} 
                    articleId={selectedArticle}
                    />
                    )}

        </div>
    )

}