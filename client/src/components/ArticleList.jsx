import { useEffect, useState } from "react"

import * as articleAPI from "../api/articleAPI"

import ArticleElement from "./ArticleElement"
import CreateArticleModal from "./CreateArticleModal"


export default function ArticleList (props) {
    const [articles, setArticles] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

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
        const result = await articleAPI.create(data)
        
        setShowCreate(false);
    }

    return (

        <div>

            <h1>Новини</h1>
            <div>
                {articles.map(article => (
                    <ArticleElement
                    key={article._id}
                    title={article.title}
                    description={article.description}
                    type={article.type}
                    author={article.author}
                    createdAt={article.createdAt}
                    img={article.img}
                    />     
                    ))}

            </div>

            <button className="btn btn-primary btn-block my-4" onClick={createArticleClickHandler}> Създай новина</button>
            
            {showCreate && (
                <CreateArticleModal 
                    hideModal={hideCreateArticleModal}
                    onArticleCreate={ArticleCreateHandler}
                />
            )}

        </div>
    )

}