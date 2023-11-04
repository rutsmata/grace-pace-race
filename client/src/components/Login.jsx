import styles from './Login.module.css'

export default function Login () {

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
                      placeholder="alex@gmail.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className={styles.inputFields}
                      id="password"
                      name="password"
                      placeholder="*******"
                    />
                  </li>

                  <li id="center-btn">
                    <button className={styles['login-btn']}>Login</button>
                  </li>
                </ul>
              </form>
              </div>
              





    </div>
  )
}
