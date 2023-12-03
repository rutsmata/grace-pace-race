import { useEffect, useState } from "react"

import * as articleAPI from "../../api/articleAPI"

import ArticleElement from "./ArticleElement"

export default function ArticleList () {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        articleAPI.getAll()
            .then(result => setArticles(result))
            .catch(err => console.log(err)) // implement error message

    }, []) 

    const articleDetailsClickHandler = async (articleId) => {
        try {
            await articleAPI.getOne(articleId);
            setSelectedArticle(articleId);
            
        } catch (error) {
            console.log(error);
        }

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
                    <h3 className="container">No articles yet</h3>
                )}
           


        </>
    )

}