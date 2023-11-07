import { formatDate } from "../utils/dataUtils"

export default function ArticleElement ({
  articleId,
  title, 
  description, 
  type, 
  author,
  createdAt, 
  img,
  comments,
  onDetailsClick,
} ) {

  const detailsClickHandler = () => {
      onDetailsClick(articleId)
  }

    return (

        <div>

        <div>
            <div className="col-lg-10">
              <div className="card text-center mb-5">
                <div className="card-header p-0">
                  <div className="blog-media">
                    <img src={img} alt={`${author}'s Article`} className="w-100" />
                    <a href="#" className="badge badge-primary">
                      {author}
                    </a>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="card-title mb-2">{title}</h5>
                  <small className="small text-muted">
                  <a href="#" className="text-muted">
                      {formatDate(createdAt)}
                    </a>
                    <span className="px-2">-</span>
                    <a href="#" className="text-muted">
                    Comments {comments?.length} 
                    </a>
                  </small>
                  <p className="my-2">
                    {description}
                  </p>
                </div>
                <div className="card-footer p-0 text-center">
                  <button className="btn btn-outline-dark btn-sm" onClick={detailsClickHandler} >DETAILS</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    )
}