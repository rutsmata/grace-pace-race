import { Link } from "react-router-dom"

import Path from "../../paths"

export default function HomePage () {
  
  return (

<div className="container">

<section>
    <div className="feature-posts">
      <Link to={Path.About} className="feature-post-item">
        <span>About</span>
      </Link>
      <a className="feature-post-item">
        <img src="public/imgs/gabriela-main.jpg" className="w-100" alt="" />
        <div className="feature-post-caption">Intercity Istanbul Park</div>
      </a>
      <a className="feature-post-item">
        <img src="public/imgs/gabriela-GT3.jpg" className="w-100" alt="" />
        <div className="feature-post-caption">Intercity Istanbul Park</div>
      </a>
      <a className="feature-post-item">
        <img src="public/imgs/gabriela1-GT3.jpg" className="w-100" alt="" />
        <div className="feature-post-caption">Intercity Istanbul Park</div>
      </a>
      <a className="feature-post-item">
        <img src="public/imgs/gabriela-front.jpg" className="w-100" alt="" />
        <div className="feature-post-caption">Intercity Istanbul Park</div>
      </a>
      <a className="feature-post-item">
        <img src="public/imgs/furka.jpg" className="w-100" alt="" />
        <div className="feature-post-caption">Furka Pass</div>
      </a>
    </div>
  </section>

  </div>
  )
}
