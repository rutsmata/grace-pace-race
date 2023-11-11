import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetailsModalNew () {
    const {articleId} = useParams();
    const [articleDetails, setArticleDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/articlesNew/${articleId}`)
            .then(res => res.json())
            .then(setArticleDetails)
    }, [articleId])

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
                            <Link to="#" className="text-muted">Comments {articleDetails.comments?.length} </Link>
                            </small>
                        </div>
                        <div className="card-body border-top">
                            <p className="my-3">{articleDetails.title}</p>

                            <p>
                            {articleDetails.description}
                            </p>
                        </div>

                        <div className="card-footer">
                            <h6 className="mt-5 mb-3 text-center">
                            <Link to="#" className="text-dark">Comments {articleDetails.comments?.length}</Link>
                            </h6>
                            <hr />
                            <div className="media">
                            <img
                                src="public/imgs/avatar-1.jpg"
                                className="mr-3 thumb-sm rounded-circle"
                                alt="..."
                            />
                            <div className="media-body">
                                <h6 className="mt-0">Janice Wilder</h6>
                                <p>
                                    {articleDetails.comments?.join('-')}
                                </p>
                                <Link to="#" className="text-dark small font-weight-bold"
                                ><i className="ti-back-right"></i> Replay</Link>
                                <div className="media mt-5">
                                <Link to="#" className="mr-3">
                                    <img
                                    src="public/imgs/avatar.jpg"
                                    className="thumb-sm rounded-circle"
                                    alt="..."
                                    />
                                </Link>
                                <div className="media-body align-items-center">
                                    <h6 className="mt-0">Joe Mitchell</h6>
                                    <p>
                                    Fusce condimentum nunc ac nisi vulputate fringilla.
                                    Donec lacinia congue felis in faucibus
                                    </p>
                                    <Link to="#" className="text-dark small font-weight-bold"
                                    ><i className="ti-back-right"></i> Replay</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="media mt-5">
                            <img
                                src="public/imgs/avatar-2.jpg"
                                className="mr-3 thumb-sm rounded-circle"
                                alt="..."
                            />
                            <div className="media-body">
                                <h6 className="mt-0">Crosby Meadows</h6>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                scelerisque ante sollicitudin.
                                </p>
                                <Link to="#" className="text-dark small font-weight-bold"
                                ><i className="ti-back-right"></i> Replay</Link>
                            </div>
                            </div>
                            <div className="media mt-4">
                            <img
                                src="public/imgs/avatar-3.jpg"
                                className="mr-3 thumb-sm rounded-circle"
                                alt="..."
                            />
                            <div className="media-body">
                                <h6 className="mt-0">Jean Wiley</h6>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                scelerisque ante sollicitudin.
                                </p>
                                <Link to="#" className="text-dark small font-weight-bold"
                                ><i className="ti-back-right"></i> Replay</Link>
                            </div>
                            </div>

                            <h6 className="mt-5 mb-3 text-center">
                            <Link to="#" className="text-dark">Write Your Comment</Link>
                            </h6>
                            <hr />
                            <form>
                            <div className="form-row">
                                <div className="col-12 form-group">
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className="form-control"
                                    placeholder="Enter Your Comment Here"
                                ></textarea>
                                </div>
                        
                                
                                
                                <div className="form-group col-18">
                                <Link to="/posts/{{post._id}}/edit" className={styles['edit-btn']}>Edit</Link>
                                <Link to="/posts/{{post._id}}/delete" className={styles['del-btn']}>Delete</Link>
                                <Link to="#" className={styles['del-btn']} onClick={onClose}>Back</Link>

                                
                                <button className="btn btn-primary btn-block">
                                    Post Comment
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                        </div>
                        </div>
            </section>
      
        </>

    )
}