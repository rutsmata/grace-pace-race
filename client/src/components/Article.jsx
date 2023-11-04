export default function Article ({
    key, 
    title, 
    description, 
    type, 
    author, 
    img 
} ) {
    return (
        <div className="feature-posts">

        <a href="single-post.html" className="feature-post-item">
            <span>Последни новини</span>
          </a>

        <a href="single-post.html" className="feature-post-item">
            <img src={img} className="w-100" alt="" />
            <div className="feature-post-caption">{title}</div>
          </a>
        
        </div>
    )
}