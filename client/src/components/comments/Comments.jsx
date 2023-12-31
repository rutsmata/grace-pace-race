import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import * as commentAPI from '../../api/commentAPI'
import styles from './Comments.module.css'
import AuthContext from '../../contexts/AuthContext'

const formInitialState = {
    username: '',
    comment: '',
}

export default function Comments () {
    const {token} = useContext(AuthContext);
    
    const [formValues, setFormValues] = useState(formInitialState);
    const [comments, setComments] = useState([]);
    const {articleId} = useParams();

    useEffect (() => {
        commentAPI.getAll(articleId)
            .then(setComments);

    }, [articleId])

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
            const newComment = await commentAPI.create(formValues, token)
            setComments(state => [...state, newComment])
            
        } catch (error) {
            console.log((error));
            
        }

        resetFormHandler()

    }

    return (

        <>
                        <div className="card-footer">
                            <h6 className="mt-5 mb-3 text-center">
                            <div className="text-dark">Comments</div>
                            </h6>
                            <hr />

                            <div className="media-body align-items-center">

                                {comments.map(({_id, username, comment}) => (

                                    <div key={_id} className="card-body px-1">
                                        <h6 className="mt-0">{username}</h6>
                                        <p>
                                        {comment}
                                        </p>
                                    </div>
                                ))}

                                {comments.length === 0 && (
                                        <h2 className="mt-0">No comments yet</h2>

                                )}
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
                                        rows="3"
                                        className="form-control"
                                        placeholder="Enter Your Comment Here"
                                        value={formValues.comment}
                                        onChange={changeHandler}>
                                    </textarea>
                                </div>
                        
                                <button className={styles['comment-btn']} onClick={addCommentHandler}>
                                    Post Comment
                                </button>
                                
                            </div>
                            </form>
                        </div>
        </>
    )
}