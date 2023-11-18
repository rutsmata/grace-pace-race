import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './Register.module.css'
import useForm from '../../hooks/useForm';

export default function Register () {
  
    const {formValues, changeHandler} = useForm({    
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      repeatPassword: ''
    });
  
    const navigate = useNavigate();
    
    const [passwordError, setPasswordError] = useState('');

    const submitHandler = () => {
      console.log(formValues);
      navigate('/')
    }

    const lengthValidator = () => {
          if (formValues.password.length < 3) {
              setPasswordError('Password should be at least 3 characters')
          } 
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
                                    placeholder="Rumen" 
                                  />
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
                                    placeholder="Nazarov" 
                                  />
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
                                    placeholder="rutsmata@gmail.com" 
                                  />
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
                                    placeholder="******" 
                                    onBlur={lengthValidator}
                                  />
                                    {passwordError && (
                                        <p className={styles.errorMessage}>{passwordError}</p>
                                    )}
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
                                    placeholder="******" 
                                  />
                              </li>
                              <li id="center-btn">
                                  <button className={styles['join-btn']} type="button" onClick={submitHandler} disabled={Object.values(passwordError).some(x => x)}>JOIN</button>                                 
                              </li>
                          </ul>
                      </form>
                      </div>
            

    </div>
  )
}

