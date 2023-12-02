import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import * as authAPI from "../api/authAPI";
import Path from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
      localStorage.removeItem('accessToken');
  
      return {};
    });
  
    const loginSubmitHandler = async (formValues) => {
      const result = await authAPI.login(formValues.email, formValues.password);
      // implement error handling for password mismatch
  
      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate(Path.Home);
    };
  
    const registerSubmitHandler = async (formValues) => {
      const result = await authAPI.register(formValues.email, formValues.password);
      // implement error handling for same user
  
      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate(Path.Home);
    }
  
    const logoutHandler = () => {
      setAuth({});
  
      localStorage.removeItem('accessToken');
    }
  
    const token = localStorage.getItem('accessToken');
  
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      email: auth.email,
      username: auth.username || auth.email,
      isAuth: !!auth.accessToken,
      token,
    }


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;
