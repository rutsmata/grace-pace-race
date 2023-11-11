import { useState } from 'react'
import styles from './Register.module.css'

const formInitialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: ''
}

export default function Register () {
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
                <div className={styles.signupSection}>

                      <form method="post" className={styles.signupForm}>
                          <h2>Sign Up</h2>
                          <ul className={styles.noBullet}>
                              <li>
                                  <label htmlFor="first-name">First Name:</label>
                                  <input 
                                  type="text" 
                                  className={styles.inputFields} 
                                  id="first-name" 
                                  name='firstname' 
                                  value={formValues.firstname}
                                    onChange={changeHandler}
                                  placeholder="Rumen" />
                              </li>
                              <li>
                                  <label htmlFor="last-name">Last Name:</label>
                                  <input 
                                  type="text" 
                                  className={styles.inputFields} 
                                  id="last-name" 
                                  name='lastname'  
                                  value={formValues.lastname}
                                onChange={changeHandler}
                                  placeholder="Nazarov" />
                              </li>
                              <li>
                                  <label htmlFor="email">Email:</label>
                                  <input 
                                  type="text" 
                                  className={styles.inputFields} 
                                  id="email" 
                                  name='email'  
                                  value={formValues.email}
                                  onChange={changeHandler}
                                  placeholder="rutsmata@gmail.com" />
                              </li>
                              <li>
                                  <label htmlFor="password">Password:</label>
                                  <input 
                                  type="password" 
                                  className={styles.inputFields} 
                                  id="password" 
                                  name='password' 
                                  value={formValues.password}
                                  onChange={changeHandler}
                                  placeholder="******" />
                              </li>
                              <li>
                                  <label htmlFor="repeat-password">Repeat-Password:</label>
                                  <input 
                                  type="password" 
                                  className={styles.inputFields} 
                                  id="repeat-password" 
                                  name='repeatPassword' 
                                  value={formValues.repeatPassword}
                                  onChange={changeHandler}
                                  placeholder="******" />
                              </li>
                              <li id="center-btn">
                                  <button className={styles['join-btn']} type="button" onClick={submitHandler}>JOIN</button>
                              </li>
                          </ul>
                      </form>
                      </div>
            

    </div>
  )
}

