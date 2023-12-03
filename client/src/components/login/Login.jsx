import { useContext } from 'react';
import useForm from '../../hooks/useForm';

import styles from './Login.module.css'
import AuthContext from '../../contexts/AuthContext';

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
                  
                </ul>
              </form>
              </div>
              





    </div>
  )
}
