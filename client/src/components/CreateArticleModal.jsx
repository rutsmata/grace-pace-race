import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './CreateArticleModal.module.css'
import css from './Login.module.css'

const formInitialState = {
    author: '',
    title: '',
    description: '',
    img: '',

}

export default function CreateArticleModal () {
    const navigate = useNavigate();

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

    const submitHandler = () => {
      console.log(formValues);
      resetFormHandler()
      navigate('/articles')
    }

 
    return (
        <>
              
              <div className={styles.createSection}>

                <form  method="post" className={styles.createForm}>
                  <h2>Create Article</h2>
                  <ul className={css.noBullet}>
                  <li>
                      <label htmlFor="author">Author:</label>
                      <input
                        type="text"
                        className={css.inputFields}
                        id="author"
                        placeholder="First Name & Last Name"
                        name="author"
                        value={formValues.author}
                        onChange={changeHandler}
                      />
                    </li>
                    <li>
                      <label htmlFor="title">Title:</label>
                      <input
                        type="text"
                        className={css.inputFields}
                        id="title"
                        placeholder="Article Title"
                        name="title"
                        value={formValues.title}
                        onChange={changeHandler}
                      />
                    </li>
                    
                    <li>
                      <label htmlFor="type">Type:</label>
                      <select id="type" name="type" className={css.inputFields}>
                        <option onChange={changeHandler} >Select Genre</option>
                          <option >Electric</option>
                          <option >Hybrid</option>
                          <option >Sport</option>
                      </select>
                    </li>
                    <li>
                      <label htmlFor="description">Description:</label>
                      <textarea
                        id="description"
                        className={css.inputFields}
                        name="description"
                        placeholder="Article Text Here..."
                        value={formValues.description}
                        onChange={changeHandler}
                      ></textarea>
                    </li>
                    <li>
                      <label htmlFor="img">Image:</label>
                      <input
                        type="text"
                        className={css.inputFields}
                        id="img"
                        placeholder="http://..."
                        name="img"
                        value={formValues.img}
                        onChange={changeHandler}
                      />
                    </li>
                    <li id="center-btn">
                      <button className={styles['create-btn']} type="button" onClick={submitHandler}>Create</button>
                      <button className={styles['create-btn']} type="button" onClick={resetFormHandler}>Clear</button>

                    </li>
                  </ul>
                </form>

              </div>
         </>
    )
}