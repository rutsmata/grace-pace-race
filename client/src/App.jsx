import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as authAPI from "./api/authAPI";
import AuthContext from "./contexts/AuthContext";
import Path from "./paths";

import Header from "./components/header/Header";
import NavBar from "./components/navigation/NavBar";
import ArticleList from "./components/articles/ArticleList";
import ArticleDetails from "./components/articles/ArticleDetails";
import CreateArticle from "./components/articles/CreateArticle";
import HomePage from "./components/home/HomePage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import About from "./components/about/About";
import AboutMore from "./components/about/AboutMore";
import TestDriveForm from "./components/test-drive/TestDriveForm";
import ModalForSuccess from "./components/test-drive/ModalForSuccess";
import NotFound from "./components/not-found/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (formValues) => {
    const result = await authAPI.login(formValues.email, formValues.password);
    // implement error handling for password mismatch

    setAuth(result);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (formValues) => {
    const result = await authAPI.register(formValues.email, formValues.password);
    // implement error handling for same user

    console.log(result);

    setAuth(result);
    navigate(Path.Home);
  }

  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //       // check login -> chekck login based of token stored in local/storage.
  //       // if yes set is isAuth to true
  //       isAuthCheck();
  // }, []);

  // function isAuthCheck() {
  //       const token = localStorage.getItem('token');
  //       if (!token) {
  //             setIsAuth(false);
  //       }

  //       if (token) {
  //       fetch('/users/me', {
  //             headers: {
  //                   'X-Authorization' : token
  //             }
  //       })
  //       .then(() => {
  //             setIsAuth(true);
  //       })
  //       .catch(err => {
  //             setIsAuth(false);
  //       });
  //       }
  // }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    email: auth.email,
    username: auth.username,
    isAuth: !!auth.username,
  }

  return (
    <AuthContext.Provider value={ values }>
      <>
        <Header />

        <NavBar/>

        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.TestDrive} element={<TestDriveForm />} />
          <Route path={Path.ModalTestDrive} element={<ModalForSuccess />} />
          <Route />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Video} element={<AboutMore />} />
          <Route />
          <Route path={Path.Articles} element={<ArticleList />} />
          <Route path={Path.CreateArticle} element={<CreateArticle />} />
          <Route path={Path.ArticleDetails} element={<ArticleDetails />} />
          <Route path={Path[404]} element={<NotFound />} />
        </Routes>

        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
