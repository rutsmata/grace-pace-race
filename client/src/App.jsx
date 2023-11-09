import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import ArticleElement from "./components/ArticleElement"
import ArticleList from "./components/ArticleList"
import Timer from "./components/Timer"
import HomePage from "./components/HomePage"
import ArticleDetailsModal from "./components/ArticleDetailsModal"
import Login from "./components/login"
import Register from "./components/register"
import CreateArticleModal from "./components/CreateArticleModal"
import AppDescription from "./components/AppDescription"
import Footer from "./components/Footer"



function App() {


  return (
      < >
          <Header/>

          <NavBar/>

          <Routes>

              <Route path='/' element ={<HomePage/>}/>
              <Route path='/about' element ={<AppDescription/>}/>
              <Route path ="/articles" element={<ArticleList />}/>

          </Routes>

          {/* should move up to Routes in order to be seen once??? */}
          <div className="container">
          


            {/* <div className="page-container"> */}
              {/* <div className="page-content"> */}
              
              
                {/* <ArticleElement/> */}
              

                {/* <Route path="/articles/:id" element ={<ArticleDetailsModal/>} /> */}

                {/* <Login/> */}

                {/* <Register/> */}

                {/* <CreateArticleModal/> */}
              

                {/* <AppDescription/> */}

              {/* </div> */}
              </div>
            {/* </div> */}


          <LoadMorePostsButton/>

          <Footer/>


      
        </>
  )
}


export default App
