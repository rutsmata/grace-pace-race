import { Link } from "react-router-dom"

export default function Footer () {
    return (
        <div>

    <footer className="page-footer">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
            <img src="public/imgs/porsche-911-turboS.jpg" alt="" className="logo" />
          </div>
          <div className="col-md-9 text-center text-md-right">
            <div className="socials">
              <Link to="https://www.facebook.com/gracepacerace/" target="_blank"
                className="font-weight-bold text-muted mr-4"
              >
                <i className="ti-facebook pr-1" />
              </Link>

              <Link to="https://www.instagram.com/gracepacerace/" target="_blank"
                className="font-weight-bold text-muted mr-4"
              >
                <i className="ti-instagram pr-1" /> 6 800
              </Link>

            </div>
          </div>
        </div>
        <p className="border-top mb-0 mt-4 pt-3 small">
          © , GRACE PACE RACE Created By{" "}

          All rights reserved{" "}
        </p>
      </div>
    </footer>   
        </div>
    )
}