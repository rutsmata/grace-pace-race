import styles from './Register.module.css'

export default function Register () {

  return (

    <div>
                <div className={styles.signupSection}>

                      <form method="post" className={styles.signupForm}>
                          <h2>Sign Up</h2>
                          <ul className={styles.noBullet}>
                              <li>
                                  <label htmlFor="first-name">First Name:</label>
                                  <input type="text" className={styles.inputFields} id="first-name" name="firstName"  placeholder="Rumen" />
                              </li>
                              <li>
                                  <label htmlFor="last-name">Last Name:</label>
                                  <input type="text" className={styles.inputFields} id="last-name" name="lastName"  placeholder="Nazarov" />
                              </li>
                              <li>
                                  <label htmlFor="email">Email:</label>
                                  <input type="text" className={styles.inputFields} id="email" name="email"  placeholder="rutsmata@gmail.com" />
                              </li>
                              <li>
                                  <label htmlFor="password">Password:</label>
                                  <input type="password" className={styles.inputFields} id="password" name="password" placeholder="******" />
                              </li>
                              <li>
                                  <label htmlFor="repeat-password">Repeat-Password:</label>
                                  <input type="password" className={styles.inputFields} id="repeat-password" name="repeatPassword" placeholder="******" />
                              </li>
                              <li id="center-btn">
                                  <button className={styles['join-btn']} type="submit">JOIN</button>
                              </li>
                          </ul>
                      </form>
                      </div>
            

    </div>
  )
}

