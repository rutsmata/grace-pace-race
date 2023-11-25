import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as authAPI from '../../api/authAPI'
import useForm from '../../hooks/useForm';

import styles from './Login.module.css'

export default function Login () {
  
  const {formValues, changeHandler} = useForm({
    email: '',
    password: '',
  });
  
    const navigate = useNavigate();
    
    const submitHandler = async (e) => {
      e.preventDefault()

      try {
        const result = await authAPI.login(formValues.email, formValues.password);
        localStorage.setItem('token', result.accessToken);

        navigate('/')
        location.reload();

      } catch (error) {
          console.log(error);
      }
      return false;
    }

    // const loginDetails = {
    //   username: auth.username,
    //   email: auth.email,
    //   isAuthenticated: !!auth.username,
    // }

    

  return (

    <div>

              <div className={styles.loginSection}>
         
              <form className={styles.loginForm}>
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
