import { useEffect, useState } from "react"

import * as articleAPI from "../api/articleAPI"

import ArticleElement from "./ArticleElement"


export default function ArticleList (props) {
    const [articles, setArticles] = useState([])

    console.log(articles)

    useEffect(() => {
        articleAPI.getAll()
            .then(result => setArticles(result))
            .catch(err => console.log(err)) // implement error message
    }, []) 

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
                        img={article.img}
                    />     
                ))}

            </div>
            
        </div>
    )

}