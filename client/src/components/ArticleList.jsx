import Article from "./Article"
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
            <h1>TEST2</h1>
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
            </div>

        {/* <div className="feature-posts">
          <a href="single-post.html" className="feature-post-item">
            <span>Последни новини</span>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/Citroen Ami 1.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[0]}/></div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/VW Touareg 1.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[1]}/></div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/BMW i7 main.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[2]}/></div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/Volvo Prime Video main.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[3]}/></div>
          </a>
        </div> */}
        </div>
    )


}