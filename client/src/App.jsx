import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import ArticleElement from "./components/ArticleElement"
// import ArticleList from "./components/ArticleList"
import Timer from "./components/Timer"
import HomePage from "./components/HomePage"
// import ArticleDetailsModal from "./components/ArticleDetailsModal"
import Login from "./components/login"
import Register from "./components/register"
import CreateArticleModal from "./components/CreateArticleModal"
import About from "./components/About"
import Footer from "./components/Footer"
import TestDriveForm from "./components/TestDriveForm"
import NotFound from "./components/NotFound"
import ArticleListNew from './components/ArticleListNew'
import ArticleDetailsModalNew from './components/ArticleDetailsModalNew'




function App() {


  return (
      < >
          <Header/>

          <NavBar/>

          <Routes>

              <Route path='/' element ={<HomePage/>}/>
              <Route path='/register' element ={<Register/>}/>
              <Route path='/login' element ={<Login/>}/>
              <Route path='/create' element ={<CreateArticleModal/>}/>
              <Route path='/test-drive' element ={<TestDriveForm/>}/>
              <Route path='/about' element ={<About/>}/>

              {/* <Route path ="/articles" element={<ArticleList />}/> */}
              <Route path ="/articles" element={<ArticleListNew />}/>

              {/* <Route path="/articles/:articleId" element ={<ArticleDetailsModal/>} /> */}
              <Route path="/articlesNew/:articleId" element ={<ArticleDetailsModalNew/>} />

              <Route path='/details' element ={<ArticleElement/>}/>
              <Route path='*' element ={<NotFound/>}/>

          </Routes>
          

          {/* <div className="container"> */}
          


            {/* <div className="page-container"> */}
              {/* <div className="page-content"> */}
              
              
                {/* <ArticleElement/> */}
              




              


              {/* </div> */}
              {/* </div> */}
            {/* </div> */}


          <LoadMorePostsButton/>

          <Footer/>


      
        </>
  )
}


export default App
