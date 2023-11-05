import ArticleElement from "./ArticleElement"

import { useEffect, useState } from "react"

export default function ArticleList (props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/articles`)
            .then(response => response.json())
            .then(data => {
                const result = Object.values(data) // we get the result, we keep in a state and we set in the function
                setArticles(result)
            })
            .catch(err => console.log(err))
    }, []) 

    return (

        <div>


            {/* <h1>Server data Line 1</h1>
            <div>
                {articles.map(article => (
                    <SubArticleLine1
                        key={article._id}
                        title={article.title}
                        description={article.description}
                        type={article.type}
                        author={article.author}
                        img={article.img}
                    />
                    
                ))}
            </div> */}

            <h1>Server data</h1>
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