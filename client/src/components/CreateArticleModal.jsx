import { useState } from 'react'
import styles from './CreateArticleModal.module.css'

import css from './Login.module.css'

export default function CreateArticleModal ({
  onClose,
  onCreate,
}) {
    return (
        <div>
              
              <div className={styles.createSection}>

                <form onSubmit={onCreate} method="post" className={styles.createForm}>
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
                      />
                    </li>
                    
                    <li>
                      <label htmlFor="type">Type:</label>
                      <select id="type" name="type" className={css.inputFields}>
                        <option >Select Genre</option>
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
                        
                      />
                    </li>
                    <li id="center-btn">
                      <button className={styles['create-btn']} type="submit">Create</button>
                      <button className={styles['create-btn']} type="button" onClick={onClose}>Cancel</button>

                    </li>
                  </ul>
                </form>

              </div>
         </div>
    )
}