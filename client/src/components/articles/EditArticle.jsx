import { useNavigate } from 'react-router-dom'

import * as articleAPI from '../../api/articleAPI'

import styles from './CreateArticle.module.css'
import useForm from '../../hooks/useForm'

export default function CreateArticle () {
  
    const {formValues, onChange} = useForm({    
      author: '',
      title: '',
      description: '',
      img: '',
      type: ''
    });
    
    const navigate = useNavigate();

    const submitHandler = async (e) => {
      e.preventDefault();

      try {
        await articleAPI.create(formValues)

      } catch (error) {
        console.log((error));
        
      }
      navigate('/articles')
    }

 
    return (
        <>              
              <div className={styles.createSection}>

                <form  method="post" className={styles.createForm}>
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
                        value={formValues.author}
                        onChange={onChange}
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
                        value={formValues.title}
                        onChange={onChange}
                      />
                    </li>
                    
                    <li>
                      <label htmlFor="type">Type:</label>
                      <select 
                          id="type" 
                          name="type" 
                          className={styles.inputFields} 
                          onChange={onChange} 
                          value={formValues.type}
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
                        value={formValues.description}
                        onChange={onChange}
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
                        value={formValues.img}
                        onChange={onChange}
                      />
                    </li>
                    <li id="center-btn">
                      <button className={styles['create-btn']} type="button" onClick={submitHandler}>Create</button>
                    </li>
                  </ul>
                </form>

              </div>
         </>
    )
}