import styles from './ArticleDetails.module.css'

export default function ArticleDetails () {

  return (
    <div>
            <header className="page-header page-header-mini">
          <h1 className="title">
            Citroen Ami променя играта в микромобилността | Тест1
          </h1>
          
        </header>

        <section className="container">
    <div className="page-container">
      <div className="page-content">
        <div className="card">
          <div className="card-header pt-0">

            <div className="blog-media mb-4">
              <img src="public/imgs/blog-6.jpg" alt="" className="w-100" />
              <a href="#" className="badge badge-primary">#Salupt</a>
            </div>
            <small className="small text-muted">
              <a href="#" className="text-muted">32 Comments</a>
            </small>
          </div>
          <div className="card-body border-top">
            <p className="my-3">Защо Citroen Ami?</p>

            <p>
              Безспорно най-атрактивният аспект на Citroen Ami е неговата
              достъпност. От една страна имаме цената, която у нас започва от
              19 900 лв с ДДС. От друга, Ami може да се управлява без
              шофьорска книжка в много европейски страни, което го прави
              достъпно за широк кръг от хора, включително тийнейджъри на 14
              години, а в България над 16 години с допустима категория.
            </p>
          </div>

          <div className="card-footer">
            <h6 className="mt-5 mb-3 text-center">
              <a href="#" className="text-dark">Comments 4</a>
            </h6>
            <hr />
            <div className="media">
              <img
                src="public/imgs/avatar-1.jpg"
                className="mr-3 thumb-sm rounded-circle"
                alt="..."
              />
              <div className="media-body">
                <h6 className="mt-0">Janice Wilder</h6>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin.
                </p>
                <a href="#" className="text-dark small font-weight-bold"
                  ><i className="ti-back-right"></i> Replay</a
                >
                <div className="media mt-5">
                  <a className="mr-3" href="#">
                    <img
                      src="public/imgs/avatar.jpg"
                      className="thumb-sm rounded-circle"
                      alt="..."
                    />
                  </a>
                  <div className="media-body align-items-center">
                    <h6 className="mt-0">Joe Mitchell</h6>
                    <p>
                      Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus
                    </p>
                    <a href="#" className="text-dark small font-weight-bold"
                      ><i className="ti-back-right"></i> Replay</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="media mt-5">
              <img
                src="public/imgs/avatar-2.jpg"
                className="mr-3 thumb-sm rounded-circle"
                alt="..."
              />
              <div className="media-body">
                <h6 className="mt-0">Crosby Meadows</h6>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin.
                </p>
                <a href="#" className="text-dark small font-weight-bold"
                  ><i className="ti-back-right"></i> Replay</a
                >
              </div>
            </div>
            <div className="media mt-4">
              <img
                src="public/imgs/avatar-3.jpg"
                className="mr-3 thumb-sm rounded-circle"
                alt="..."
              />
              <div className="media-body">
                <h6 className="mt-0">Jean Wiley</h6>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin.
                </p>
                <a href="#" className="text-dark small font-weight-bold"
                  ><i className="ti-back-right"></i> Replay</a
                >
              </div>
            </div>

            <h6 className="mt-5 mb-3 text-center">
              <a href="#" className="text-dark">Write Your Comment</a>
            </h6>
            <hr />
            <form>
              <div className="form-row">
                <div className="col-12 form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Enter Your Comment Here"
                  ></textarea>
                </div>
         
                
                
                <div className="form-group col-18">
                <a href="/posts/{{post._id}}/edit" className={styles['edit-btn']}>Edit</a>
                <a href="/posts/{{post._id}}/delete" className={styles['del-btn']}>Delete</a>
                
                  <button className="btn btn-primary btn-block">
                    Post Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
        </section>


    </div>
  )
}


  
