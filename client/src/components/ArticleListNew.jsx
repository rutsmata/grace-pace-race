import { useState, useEffect } from "react";

import ArticleElementNew from "./ArticleElement";

const base_url = 'http://localhost:3030/jsonstore'

export default function ArticleListNew () {
    const [articles, SetArticles] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${base_url}/articlesNew`, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => {
                SetArticles(data.articles)
            });

            return () => {
                abortController.abort();
            }
    }, []);


    return (
        <div>

            <h1>Articles Default New</h1>
            <div>
                {articles.map(article => (
                    <ArticleElementNew
                    key={article._id}
                    articleId={article._id}
                    {...article}
                    />     
                    ))}

            </div>
        </div>

    )
}