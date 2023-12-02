import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import * as articleAPI from '../../api/articleAPI'

import styles from './CreateArticle.module.css'
import useForm from '../../hooks/useForm'

export default function CreateArticle () {
    const {token} = useContext(AuthContext)
    
    const navigate = useNavigate();

    const submitHandler = async (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(e.currentTarget));
      console.log(data);

      try {
        await articleAPI.create(data, token)
        navigate('/articles')

      } catch (error) {
        console.log((error));
        
      }
    }

 
    return (
        <>              
              <div className={styles.createSection}>

                <form className={styles.createForm} onSubmit={submitHandler}>
                  <h2>Create Article</h2>
                  <ul className={styles.noBullet}>
                  <li>
                      <label htmlFor="author">Author:</label>
                      <input
                        type="text"
                        className={styles.inputFields}
                        id="author"
                        placeholder="First Name & Last Name"
                        name="author"
                      />
                    </li>
                    <li>
                      <label htmlFor="title">Title:</label>
                      <input
                        type="text"
                        className={styles.inputFields}
                        id="title"
                        placeholder="Article Title"
                        name="title"
                      />
                    </li>
                    
                    <li>
                      <label htmlFor="type">Type:</label>
                      <select 
                          id="type" 
                          name="type" 
                          className={styles.inputFields} 
                      >
                              <option  >Select Genre</option>
                                <option value='general' >General</option>
                                <option value='electric' >Electric</option>
                                <option value='hybrid'>Hybrid</option>
                                <option value='sport'>Sport</option>
                      </select>
                    </li>
                    <li>
                      <label htmlFor="description">Description:</label>
                      <textarea
                        id="description"
                        className={styles.inputFields}
                        name="description"
                        placeholder="Article Text Here..."
                      ></textarea>
                    </li>
                    <li>
                      <label htmlFor="img">Image:</label>
                      <input
                        type="text"
                        className={styles.inputFields}
                        id="img"
                        placeholder="http://..."
                        name="img"
                      />
                    </li>
                    <li id="center-btn">
                      <input className={styles['create-btn']} type="submit" value="Create Article"/>
                    </li>
                  </ul>
                </form>

              </div>
         </>
    )
}