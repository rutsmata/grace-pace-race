import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import * as articleAPI from '../../api/articleAPI'
import styles from './CreateArticle.module.css'
import AuthContext from "../../contexts/AuthContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";
import { formatDate } from "../../utils/dataUtils"

import Comments from "../comments/comments";

export default function ArticleDetails () {
    const {userId, token} = useContext(AuthContext)
    const [articleDetails, setArticleDetails] = useState({});
    const navigate = useNavigate();
    const {articleId} = useParams();

    useEffect(() => {

        articleAPI.getOne(articleId)
            .then(setArticleDetails)
            .catch ((err) => navigate('/404'))
            
        }, [articleId]);
        
    const DeleteArticleClickHandler = async (articleId) => {
            const confirmDelete = confirm(`Are you sure you want to delete ${articleDetails.title}`);

            if (confirmDelete) {

                await articleAPI.deleteArticle(articleId)
                navigate('/articles')
            }

        }

    const isOwner = userId === articleDetails._ownerId;

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
                            <i className="badge badge-primary">{articleDetails.author}</i>
                            </div>
                            <small className="small text-muted">
                                <p className="text-muted"> {formatDate(articleDetails.createdAt)}</p>
                            </small>
                        </div>
                        <div className="card-body border-top">

                            <p>
                            {articleDetails.description}
                            </p>

                            <div className="form-group col-18">
                                <Link to={Path.Articles} className={styles['back-btn']}>Back</Link>
                            </div>

                            {isOwner && (

                            <div className="form-group col-18">
                                <Link to={pathToUrl(Path.ArticleDetailsEdit, {articleId})} className={styles['edit-btn']}>Edit</Link>
                                <button onClick={DeleteArticleClickHandler} className={styles['del-btn']}>Delete</button>
                            </div>
                            
                            )}

                        </div>

                            <Comments/>
                        </div>
                        </div>
                        </div>
            </section>
      
        </>

    )
}