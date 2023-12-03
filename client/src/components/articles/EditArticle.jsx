import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import * as articleAPI from "../../api/articleAPI";
import styles from "./CreateArticle.module.css";
import AuthContext from "../../contexts/AuthContext";

export default function EditArticle() {
    const {token} = useContext(AuthContext)
  const navigate = useNavigate();
  const { articleId } = useParams();
  const { articleDetails, setArticleDetails } = useState({
    author: "",
    title: "",
    description: "",
    img: "",
    type: "",
  });

  useEffect(() => {
    articleAPI.getOne(articleId)
        .then((result) => {
            setArticleDetails(result);
    });
  }, [articleId]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formValues = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await articleAPI.edit(articleId, formValues, token);
    } catch (error) {
      console.log(error);
    }
    navigate("/articles");
  };

//   const onChange = (e) => {
//     setArticleDetails(state => ({
//         ...state,
//         [e.target.name]: e.target.value
//     }));
// };


  return (
    <>
      <div className={styles.createSection}>
        <form className={styles.createForm} onSubmit={submitHandler}>
          <h2>Edit Article</h2>
          <ul className={styles.noBullet}>
            <li>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                className={styles.inputFields}
                id="author"
                placeholder="First Name & Last Name"
                name="author"
                // value={articleDetails.author}
                // onChange={onChange}
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
                // value={articleDetails.title}
                // onChange={onChange}

              />
            </li>

            <li>
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                name="type"
                className={styles.inputFields}
                // value={articleDetails.type}
                // onChange={onChange}

              >
                <option>Select Genre</option>
                <option value="general">General</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="sport">Sport</option>
              </select>
            </li>
            <li>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className={styles.inputFields}
                name="description"
                placeholder="Article Text Here..."
                // value={articleDetails.description}
                // onChange={onChange}

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
                // value={articleDetails.img}
                // onChange={onChange}
              />
            </li>
            <li id="center-btn">
              <input className={styles["create-btn"]} type="submit" value="Edit Article" />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
