export default function ArticleElement ({
  title, 
  description, 
  type, 
  author, 
  img 
} ) {

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
                    January 17 2019
                    <span className="px-2">-</span>
                    <a href="#" className="text-muted">
                      93 Comments
                    </a>
                  </small>
                  <p className="my-2">
                    {description}
                  </p>
                </div>
                <div className="card-footer p-0 text-center">
                  <a
                    href="single-post.html"
                    className="btn btn-outline-dark btn-sm"
                  >
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    )
}