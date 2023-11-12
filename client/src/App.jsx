import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header"
import NavBar from "./components/NavBar"
import ArticleElement from "./components/ArticleElement"
import ArticleListNew from './components/ArticleListNew'
import ArticleDetailsModal from './components/ArticleDetailsModal'
import HomePage from "./components/HomePage"
import Login from "./components/login"
import Register from "./components/register"
import CreateArticleModal from "./components/CreateArticleModal"
import About from "./components/About"
import AboutMore from './components/AboutMore'
import TestDriveForm from "./components/TestDriveForm"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import Timer from "./components/Timer"


function App() {

  return (
      < >
          <Header/>

          <NavBar/>

          <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/create' element={<CreateArticleModal/>}/>
              <Route path='/test-drive' element={<TestDriveForm/>}/>
              <Route path='/about' element={<About/>}/>
                    <Route path='more' element={<AboutMore/>} />
              <Route/>
              <Route path ="/articles" element={<ArticleListNew />}/>
              <Route path="/articles/:articleId" element={<ArticleDetailsModal/>} />
              <Route path='/details' element={<ArticleElement/>}/>
              <Route path='*' element={<NotFound/>}/>

          </Routes>
          
          <LoadMorePostsButton/>

          <Footer/>
     
        </>
  )
}


export default App