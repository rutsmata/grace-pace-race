import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ArticleDetails from '../articles/ArticleDetails'

import * as commentAPI from '../../api/commentAPI'

import styles from './Comments.module.css'

const formInitialState = {
    username: '',
    comment: '',
}


export default function Comments () {
    const {articleId} = useParams();

    const [formValues, setFormValues] = useState(formInitialState)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
      }

    const resetFormHandler = () => {
    setFormValues(formInitialState)

    }

    const addCommentHandler = async (e) => {
        e.preventDefault()
        
        try {
            await commentAPI.create(formValues)
                            
            
        } catch (error) {
            console.log((error));
            
        }

        resetFormHandler()

    }

    return (

        <>
                    {/* for Guests and Users */}
                        <div className="card-footer">
                            <h6 className="mt-5 mb-3 text-center">
                            <Link to="#" className="text-dark">Comments {ArticleDetails.comments?.length}</Link>
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
                                    {ArticleDetails.comments?.join('-')}
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

                            <h6 className="mt-5 mb-3 text-center text-dark">Write Your Comment </h6>
                            <form>
                            <div className="form-row">
                                <div className="col-12 form-group">
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Username"
                                        value={formValues.username}
                                        onChange={changeHandler}>
                                    </input>
                                    <textarea
                                        name="comment"
                                        id="comment"
                                        cols="30"
                                        rows="10"
                                        className="form-control"
                                        placeholder="Enter Your Comment Here"
                                        value={formValues.comment}
                                        onChange={changeHandler}>
                                    </textarea>
                                </div>
                        
                                {/* Edit/delete buttons (Only for creator of this game) */}
                                
                                <div className="form-group col-18">
                                <Link to="/posts/{{post._id}}/edit" className={styles['edit-btn']}>Edit</Link>
                                <Link to="/posts/{{post._id}}/delete" className={styles['del-btn']}>Delete</Link>
                                <Link to="/articles" className={styles['del-btn']}>Back</Link>

                                {/* Add comment (Only for logged-in users, which is not creator of the current article) */}
                                <button className="btn btn-primary btn-block" onClick={addCommentHandler}>
                                    Post Comment
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
        </>
    )
}