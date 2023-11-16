import { useEffect, useState } from "react"

import * as articleAPI from "../../api/articleAPI"

import ArticleElement from "./ArticleElement"
import CreateArticle from "./CreateArticle"
import ArticleDetails from "./ArticleDetails"


export default function ArticleList () {
    const [articles, setArticles] = useState([]);
    // const [showCreate, setShowCreate] = useState(false);
    // const [showDetails, setShowDetails] = useState(false);
    // const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {

        articleAPI.getAll()
            .then(result => setArticles(result))
            .catch(err => console.log(err)) // implement error message

    }, []) 

    // const createArticleClickHandler = () => {
    //     setShowCreate(true)
    // }

    // const hideCreateArticle = () => {
    //     setShowCreate(false)

    // }

    // const ArticleCreateHandler = async (e) => {
    //     e.preventDefault();
        
    //     const data = Object.fromEntries(new FormData(e.currentTarget));
    //     const newArticle = await articleAPI.create(data);

    //     setArticles(state => [...state, newArticle]) 
        
    //     setShowCreate(false);
    // }

    const articleDetailsClickHandler = async (articleId) => {
        // use try catch
        const articleDetails = await articleAPI.getOne(articleId);
        setSelectedArticle(articleId);
        setShowDetails(true);

    }

    return (

            <>
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

                {articles.length === 0 && (
                    // Use css
                    <h3 className="container">No articles yet</h3>
                )}
           
            {/* {showCreate && (
                <CreateArticle 
                    onClose={hideCreateArticle}
                    onCreate={ArticleCreateHandler}
                />
            )}

            {showDetails && (
                <ArticleDetails 
                    onClose={() => setShowDetails(false)} 
                    articleId={selectedArticle}
                    />
                    )} */}

        </>
    )

}