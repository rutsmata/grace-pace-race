import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPhoto from "./components/MainPhoto"
import InstagramWrapper from "./components/InstagramWrapper"
import MainArticle from "./components/MainArticle"
import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import SubArticlesLine1 from "./components/SubArticlesLine1"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import SubArticlesLine2 from "./components/SubArticlesLine2"
import ArticleList from "./components/ArticleList"
import Timer from "./components/Timer"
import TestDriveForm from "./components/TestDriveRegistrationForm"
import HomePage from "./components/HomePage"
import ArticleDetails from "./components/articleDetails"



function App() {



  return (
  <div>
    <Header/>

    <NavBar/>

    <MainPhoto/>

    <HomePage/>

    {/* <TestDriveForm/> */}

    <div className="container">
      {/* <section> */}
        <ArticleList />
        {/* <Timer startTime={100}/> */}
      {/* </section> */}
      {/* <hr /> */}
      <div className="page-container">
        <div className="page-content">
        {/* <MainArticle/> */}
          {/* <hr /> */}
         
          {/* <SubArticlesLine1/> */}
         
          <SubArticlesLine2/>
         
          {/* <SubArticlesLine3/> */}

          <ArticleDetails/>
        

        </div>
        {/* <Sidebar/> */}
        </div>
      </div>
    <LoadMorePostsButton/>

    {/* <InstagramWrapper/> */}

    {/* <Footer/> */}
  
    </div>
  )
}


export default App
