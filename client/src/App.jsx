import { Routes, Route } from "react-router-dom";

import {AuthProvider} from "./contexts/AuthContext";
import Path from "./paths";

import Header from "./components/header/Header";
import NavBar from "./components/navigation/NavBar";
import ArticleList from "./components/articles/ArticleList";
import ArticleDetails from "./components/articles/ArticleDetails";
import CreateArticle from "./components/articles/CreateArticle";
import HomePage from "./components/home/HomePage";
import Login from "./components/login/Login";
import Logout from "./components/logout/logout";
import Register from "./components/register/Register";
import About from "./components/about/About";
import AboutMore from "./components/about/AboutMore";
import TestDriveForm from "./components/test-drive/TestDriveForm";
import ModalForSuccess from "./components/test-drive/ModalForSuccess";
import NotFound from "./components/not-found/NotFound";
import Footer from "./components/footer/Footer";

function App() {


  return (
    <AuthProvider>
      <>
        <Header />

        <NavBar/>

        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout/>} />
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
    </AuthProvider>
  );
}

export default App;
