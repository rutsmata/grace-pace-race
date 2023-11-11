import { Link } from "react-router-dom"
import { formatDate } from "../utils/dataUtils"

export default function ArticleElementNew ({
  articleId,
  title, 
  description, 
  type, 
  author,
  createdAt, 
  img,
  comments,
} ) {


    return (

        <div>

        <div>
            <div className="col-lg-10">
              <div className="card text-center mb-5">
                <div className="card-header p-0">
                  <div className="blog-media">
                    <img src={img} alt={`${author}'s Article`} className="w-100" />
                    <Link to="#" className="badge badge-primary">
                      {author}
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="card-title mb-2">{title}</h5>
                  <small className="small text-muted">
                  <Link to="#" className="text-muted">
                      {formatDate(createdAt)}
                    </Link>
                    <span className="px-2">-</span>
                    <Link to="#" className="text-muted">
                    Comments {comments?.length} 
                    </Link>
                  </small>
                  <p className="my-2">
                    {description}
                  </p>
                </div>
                <div className="card-footer p-0 text-center">
                  <Link to={`./${articleId}`} className="btn btn-outline-dark btn-sm" >DETAILS </Link>

                </div>
              </div>
            </div>
            
          </div>
        </div>
    )
}