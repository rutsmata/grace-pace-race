import { useState } from 'react'
import styles from './Login.module.css'

const formInitialState = {
  email: '',
  password: '',
}

export default function Login () {
    const [formValues, setFormValues] = useState(formInitialState);

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

    }

  return (

    <div>

              <div className={styles.loginSection}>
         
              <form method="post" className={styles.loginForm}>
                <h2>Login</h2>
                <ul className={styles.noBullet}>
                  <li>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className={styles.inputFields}
                      id="email"
                      name="email"
                      value={formValues.email}
                      placeholder="alex@gmail.com"
                      onChange={changeHandler}
                    />
                  </li>
                  <li>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className={styles.inputFields}
                      id="password"
                      name="password"
                      value={formValues.password}
                      placeholder="*******"
                      onChange={changeHandler}
                    />
                  </li>

                  <li id="center-btn">
                    <button className={styles['login-btn']} type="button" onClick={submitHandler}>Login</button>
                  </li>
                </ul>
              </form>
              </div>
              





    </div>
  )
}
