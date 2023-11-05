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
  <div >
    <Header/>

    <NavBar/>


    <HomePage/>


    <div className="container">
        <ArticleList />
      {/* <div className="page-container"> */}
        {/* <div className="page-content"> */}
         
         
          {/* <ArticleElement/> */}
         

          {/* <ArticleDetailsModal/> */}

          {/* <Login/> */}

          {/* <Register/> */}

          {/* <CreateArticleModal/> */}
        

          {/* <AppDescription/> */}

        </div>
        {/* </div> */}
      {/* </div> */}


    <LoadMorePostsButton/>

    <Footer/>


  
    </div>
  )
}


export default App
