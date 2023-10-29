import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPhoto from "./components/MainPhoto"
import InstagramWrapper from "./components/InstagramWrapper"
import MainArticle from "./components/MainArticle"
import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import SubArticlesLine1 from "./components/SubArticlesLine1"
import LoadMorePostsButton from "./components/LoadMorePostsButton"
import SubArticlesLine3 from "./components/SubArticlesLine3"
import SubArticlesLine2 from "./components/SubArticlesLine2"
import articles from "./assets/articles"
import ArticleList from "./components/ArticleList"



function App() {

  return (
  <div>
    <Header/>

    <NavBar/>

    <MainPhoto/>

    <div className="container">
      <section>
        <ArticleList articles={articles} />
      </section>
      <hr />
      <div className="page-container">
        <div className="page-content">
        <MainArticle/>
          <hr />
         
          <SubArticlesLine1/>
         
          <SubArticlesLine2/>
         
          <SubArticlesLine3/>
        

        </div>
        <Sidebar/>
        </div>
      </div>
    <LoadMorePostsButton/>

    <InstagramWrapper/>

    <Footer/>
  
    </div>
  )
}


export default App
