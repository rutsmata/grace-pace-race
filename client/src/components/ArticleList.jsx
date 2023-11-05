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

    return (

        <div>
            {showCreate && <CreateArticleModal hideModal={hideCreateArticleModal}/>}

            <h1>Новини</h1>
            <div>
                {articles.map(article => (
                    <ArticleElement
                        key={article._id}
                        title={article.title}
                        description={article.description}
                        type={article.type}
                        author={article.author}
                        img={article.img}
                    />     
                ))}

            </div>

            <button className="btn btn-primary btn-block my-4" onClick={createArticleClickHandler}> Създай новина</button>
            

        </div>
    )

}