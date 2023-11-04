import Article from "./Article"
import SubArticleLine1 from "./SubArticlesLine1"
import SubArticleLine2 from "./SubArticlesLine2"

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
            {/* <h1>Server data Article</h1>
            <div>
                {articles.map(article => (
                    <Article
                        key={article._id}
                        title={article.title}
                        description={article.description}
                        published={article.published}
                        author={article.author}
                        img={article.img}
                    />
                    
                ))}
            </div> */}

            {/* <h1>Server data Line 1</h1>
            <div>
                {articles.map(article => (
                    <SubArticleLine1
                        key={article._id}
                        title={article.title}
                        description={article.description}
                        published={article.published}
                        author={article.author}
                        img={article.img}
                    />
                    
                ))}
            </div> */}

            <h1>Server data Line 2</h1>
            <div>
                {articles.map(article => (
                    <SubArticleLine2
                        key={article._id}
                        title={article.title}
                        description={article.description}
                        published={article.published}
                        author={article.author}
                        img={article.img}
                    />
                    
                ))}
            </div>
            


        </div>
    )


}