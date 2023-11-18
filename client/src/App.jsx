import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import NavBar from "./components/navigation/NavBar"
import ArticleList from './components/articles/ArticleList'
import ArticleDetails from './components/articles/ArticleDetails'
import CreateArticle from "./components/articles/CreateArticle"
import HomePage from "./components/home/HomePage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import About from "./components/about/About"
import AboutMore from './components/about/AboutMore'
import TestDriveForm from "./components/test-drive/TestDriveForm"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import NotFound from "./components/not-found/NotFound"
import Footer from "./components/footer/Footer"
import Timer from "./components/Timer"
import ModalForSuccess from './components/test-drive/ModalForSuccess'


function App() {

  return (
      < >
          <Header/>

          <NavBar/>

          <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/test-drive' element={<TestDriveForm/>}/>
                    <Route path ='/apply' element={<ModalForSuccess/>}/>
              <Route/>
              <Route path='/about' element={<About/>}/>
                    <Route path='/more' element={<AboutMore/>} />
              <Route/>
              <Route path ="/articles" element={<ArticleList />}/>
              <Route path='/articles/create' element={<CreateArticle/>}/>
              <Route path="/articles/:articleId" element={<ArticleDetails/>} />
              <Route path='*' element={<NotFound/>}/>

          </Routes>
          
          <LoadMorePostsButton/>

          <Footer/>
     
        </>
  )
}


export default App