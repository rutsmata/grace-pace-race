import {Link} from 'react-router-dom'
export default function NavBar () {
    return (
        <div>

    <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/articles" className="nav-link">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/test-drive" className="nav-link">
                Test drive
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create article
              </Link>
            </li>

            <li className="nav-item">
              <Link to="index.html" className="nav-link" >
                Electric vehicles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="ml-4 btn btn-dark mt-1 btn-sm">
                Login
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
        </div>
    )
}