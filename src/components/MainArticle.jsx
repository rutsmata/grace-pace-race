import ArticleSummary from "./ArticleSummary";

export default function MainArticle () {
    return (
        <div>

<div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Voluptates Corporis Placeat</h5>
                <ArticleSummary/>
            </div>
            <div className="card-body">
              <div className="blog-media">
                <img src="public/imgs/blog-6.jpg" alt="" className="w-100" />
                <a href="#" className="badge badge-primary">
                  #Salupt
                </a>
              </div>
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                saepe dolores et nostrum porro odit reprehenderit animi, est
                ratione fugit aspernatur ipsum. Nostrum placeat hic saepe
                voluptatum dicta ipsum beatae.
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center flex-basis-0">
              <button className="btn btn-primary circle-35 mr-4">
                <i className="ti-back-right" />
              </button>
              <a href="single-post.html" className="btn btn-outline-dark btn-sm">
                READ MORE
              </a>
              <a href="#" className="text-dark small text-muted">
                By : Joe Mitchell
              </a>
            </div>
          </div>
        </div>
    )
}