import Header from "./components/Header"
import MainPhoto from "./components/MainPhoto"
import NavBar from "./components/NavBar"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import ArticleElement from "./components/ArticleElement"
import ArticleList from "./components/ArticleList"
import Timer from "./components/Timer"
import TestDriveForm from "./components/TestDriveForm"
import HomePage from "./components/HomePage"
import ArticleDetails from "./components/articleDetails"
import Login from "./components/login"
import Register from "./components/register"
import CreateArticle from "./components/CreateArticle"
import AppDescription from "./components/AppDescription"



function App() {



  return (
  <div>
    <Header/>

    <NavBar/>

    <MainPhoto/>

    <HomePage/>

    {/* <TestDriveForm/> */}

    <div className="container">
        <ArticleList />
      <div className="page-container">
        <div className="page-content">
         
         
          <ArticleElement/>
         

          <ArticleDetails/>

          <Login/>

          <Register/>

          <CreateArticle/>
        
          <TestDriveForm/>

          <AppDescription/>

        </div>
        </div>
      </div>


    <LoadMorePostsButton/>


  
    </div>
  )
}


export default App
