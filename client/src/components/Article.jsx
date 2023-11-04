export default function Article (props) {
    return (
        <div className="feature-posts">

        <a href="single-post.html" className="feature-post-item">
            <span>Последни новини</span>
          </a>

        <a href="single-post.html" className="feature-post-item">
            <img src={props.img} className="w-100" alt="" />
            <div className="feature-post-caption">{props.title}</div>
          </a>
        
        </div>
    )
}