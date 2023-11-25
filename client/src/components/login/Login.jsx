import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as authAPI from '../../api/authAPI'
import useForm from '../../hooks/useForm';

import styles from './Login.module.css'
import AuthContext from '../../contexts/Auth';

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
}

export default function Login () {
  const {loginSubmitHandler} = useContext(AuthContext)
  
  const {formValues, onChange, onSubmit} = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });
  
    const navigate = useNavigate();
    
    // const onSumbit = async (e) => {
    //   e.preventDefault()
    //   console.log(formValues);
    //   navigate('/')

      // try {
      //   const result = await authAPI.login(formValues.email, formValues.password);
      //   localStorage.setItem('token', result.accessToken);

      //   navigate('/')
      //   location.reload();

      // } catch (error) {
      //     console.log(error);
      // }
      // return false;
    // }

    // const loginDetails = {
    //   username: auth.username,
    //   email: auth.email,
    //   isAuthenticated: !!auth.username,
    // }

    

  return (

    <div>

              <div className={styles.loginSection}>
         
              <form className={styles.loginForm} onSubmit={onSubmit}>
                <h2>Login</h2>
                <ul className={styles.noBullet}>
                  <li>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className={styles.inputFields}
                      id="email"
                      name={LoginFormKeys.Email}
                      onChange={onChange}
                      value={formValues[LoginFormKeys.Email]}
                      placeholder="alex@gmail.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className={styles.inputFields}
                      id="password"
                      name={LoginFormKeys.Password}
                      onChange={onChange}
                      value={formValues[LoginFormKeys.Password]}
                      placeholder="*******"
                    />
                  </li>

                  <input type="submit" className={styles['login-btn']} value="Login" />


                  {/* <li id="center-btn">
                    <button className={styles['login-btn']} type="button" onClick={onSumbit}>Login</button>
                  </li> */}
                </ul>
              </form>
              </div>
              





    </div>
  )
}
