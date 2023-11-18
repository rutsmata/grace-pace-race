import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css'
import useForm from '../../hooks/useForm';

export default function Login () {
  
  const {formValues, changeHandler} = useForm({
    email: '',
    password: '',
  });
  
    const navigate = useNavigate();
    
    const submitHandler = () => {
      console.log(formValues);
      navigate('/')
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
