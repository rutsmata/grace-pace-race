import { useState, useEffect } from "react";

import ArticleElement from "./ArticleElement";

const base_url = 'http://localhost:3030/jsonstore'

export default function ArticleList () {
    const [articles, SetArticles] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${base_url}/articles`, {signal: abortController.signal})
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
                    <ArticleElement
                    key={article._id}
                    articleId={article._id}
                    {...article}
                    />     
                    ))}
                {articles.length === 0 && (
                    <h3>No articles yet</h3>
                )}

            </div>
        </div>

    )
}