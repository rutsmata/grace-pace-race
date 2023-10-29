import Article from "./Article"

export default function ArticleList (props) {

    return (

        <div>

        <div className="feature-posts">
          <a href="single-post.html" className="feature-post-item">
            <span>Последни новини</span>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/Citroen Ami 1.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[0]}/></div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/VW Touareg 1.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[1]}/></div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/BMW i7 main.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[2]}/></div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="public/imgs/Volvo Prime Video main.webp" className="w-100" alt="" />
            <div className="feature-post-caption"><Article content={props.articles[3]}/></div>
          </a>
        </div>
        </div>
    )
}