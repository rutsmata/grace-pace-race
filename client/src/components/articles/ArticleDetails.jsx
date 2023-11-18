import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import * as articleAPI from '../../api/articleAPI'

import { formatDate } from "../../utils/dataUtils"

import Comments from "../comments/comments";

export default function ArticleDetails () {
    const navigate = useNavigate();
    const {articleId} = useParams();
    const [articleDetails, setArticleDetails] = useState({});

    useEffect(() => {

        articleAPI.getOne(articleId)
            .then(setArticleDetails)
            .catch ((err) => navigate('/404'))

    }, [articleId]);
  

    return (
        <>

            <header className="page-header page-header-mini">
                <h1 className="title">
                    {articleDetails.title}
                </h1>
                
            </header>

            <section className="container">
                    <div className="page-container">
                    <div className="page-content">
                        <div className="card">
                        <div className="card-header pt-0">

                            <div className="blog-media mb-4">
                            <img src={articleDetails.img} alt="" className="w-100" />
                            <Link to="#" className="badge badge-primary">{articleDetails.author}</Link>
                            </div>
                            <small className="small text-muted">
                                <Link to="#" className="text-muted"> {formatDate(articleDetails.createdAt)}</Link>
                                <span className="px-2">-</span>
                                <Link to="#" className="text-muted">Comments {articleDetails.comments?.length} </Link>
                            </small>
                        </div>
                        <div className="card-body border-top">

                            <p>
                            {articleDetails.description}
                            </p>
                        </div>
                            <Comments/>
                        </div>
                        </div>
                        </div>
            </section>
      
        </>

    )
}