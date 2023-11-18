import { Link } from "react-router-dom"

export default function ArticleElement ({
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
            <div className="col-lg-6" style={{  width: '57%', margin: '10px auto'}}>
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
                </div>
                <div className="card-footer p-0 text-center">
                  <Link to={`/articles/${articleId}`} className="btn btn-outline-dark btn-sm" >DETAILS </Link>

                </div>
              </div>
            </div>
            
          </div>
        
    )
}