import styles from './CreateArticle.module.css'
import css from './Login.module.css'

export default function CreateArticle () {
    return (
        <div>

    <div className={styles.createSection}>
      {/* <div className={css.info}>
        <h2>"Dobby Never Meant To Kill! Dobby Only Meant to Maim, or Seriously
          Injure."</h2>
      </div> */}

      <form method="post" className={styles.createForm}>
        <h2>Create Article</h2>
        <ul class={css.noBullet}>
          <li>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className={css.inputFields}
              id="name"
              placeholder="Delphini"
              name="name"
              value=""
            />
          </li>
          
          <li>
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" className={css.inputFields}>
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
              placeholder="Creature..."
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
            <button className={styles['create-btn']}>Create</button>
          </li>
        </ul>
      </form>

    </div>

        </div>
    )
}