import Header from "./components/Header"
import MainPhoto from "./components/MainPhoto"
import NavBar from "./components/NavBar"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import ArticleElement from "./components/ArticleElement"
import ArticleList from "./components/ArticleList"
import Timer from "./components/Timer"
import HomePage from "./components/HomePage"
import ArticleDetails from "./components/articleDetails"
import Login from "./components/login"
import Register from "./components/register"
import CreateArticle from "./components/CreateArticle"
import AppDescription from "./components/AppDescription"
import Footer from "./components/Footer"



function App() {



  return (
  <div>
    <Header/>

    <NavBar/>

    <MainPhoto/>

    <HomePage/>


    <div className="container">
        <ArticleList />
      <div className="page-container">
        <div className="page-content">
         
         
          <ArticleElement/>
         

          <ArticleDetails/>

          <Login/>

          <Register/>

          <CreateArticle/>
        

          <AppDescription/>

        </div>
        </div>
      </div>


    <LoadMorePostsButton/>

    <Footer/>


  
    </div>
  )
}


export default App
