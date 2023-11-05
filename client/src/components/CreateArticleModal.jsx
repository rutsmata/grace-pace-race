import styles from './CreateArticleModal.module.css'
import css from './Login.module.css'

export default function CreateArticleModal ({
  hideModal,
}) {
    return (
        <div>
              
              <div className={styles.createSection}>

                <form method="post" className={styles.createForm}>
                  <h2>Create Article</h2>
                  <ul className={css.noBullet}>
                    <li>
                      <label htmlFor="title">Title:</label>
                      <input
                        type="text"
                        className={css.inputFields}
                        id="name"
                        placeholder="Title"
                        name="name"
                        value=""
                      />
                    </li>
                    
                    <li>
                      <label htmlFor="type">Type:</label>
                      <select id="type" name="type" className={css.inputFields}>
                        <option selected>Select</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="standard">Standard</option>
                      </select>
                    </li>
                    <li>
                      <label htmlFor="description">Description:</label>
                      <textarea
                        id="description"
                        className={css.inputFields}
                        name="description"
                        placeholder="Description..."
                      ></textarea>
                    </li>
                    <li>
                      <label htmlFor="image">Img:</label>
                      <input
                        type="text"
                        className={css.inputFields}
                        id="image"
                        placeholder="http://..."
                        name="image"
                        value=""
                      />
                    </li>
                    <li id="center-btn">
                      <button className={styles['create-btn']} type="submit">Create</button>
                      <button className={styles['create-btn']} type="button" onClick={hideModal}>Cancel</button>

                    </li>
                  </ul>
                </form>

              </div>
         </div>
    )
}