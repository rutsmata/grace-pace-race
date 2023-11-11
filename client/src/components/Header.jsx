import { Link } from "react-router-dom"
export default function Header () {
  return (
    <div>
          <nav className="navbar navbar-light bg-light">
          <div className="container">
            <Link to="https://www.gracepacerace.com/" target="_blank" className="navbar-brand" >
              <img src="public/imgs/gracepacerace-logo.jpg" alt="" />
            </Link>
            <div className="socials">
              <Link to="https://www.facebook.com/gracepacerace/" target="_blank">
                <i className="ti-facebook pr-1" />
              </Link>
              <Link to="https://www.instagram.com/gracepacerace/" target="_blank"> 
              <i className="ti-instagram pr-1" /> 7 800
              </Link>
            </div>
          </div>
        </nav>
    </div>
  )
}