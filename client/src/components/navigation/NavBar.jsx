import {Link} from 'react-router-dom'

export default function NavBar (props = {}) {

    const {
      isAuth = false,
    } = props;
  
    // function logoutMe() {
    //   localStorage.removeItem('token');
    //   location.reload();
    // }

    return (
        <div>

            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
              <div className="container">
                {/* <button
                  className="navbar-toggler ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                  <li className="nav-item">
                  {!isAuth &&
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                  }
                    </li>
                    <li className="nav-item">
                    {!isAuth &&

                      <Link to="/articles" className="nav-link">
                        Articles
                      </Link>
                    }
                    </li>
                    
                    <li className="nav-item">
                    {isAuth &&

                      <Link to="/test-drive" className="nav-link">
                        Test drive
                      </Link>
                    }
                    </li>
                    <li className="nav-item">
                    {isAuth &&
                      <Link to="/articles/create" className="nav-link">
                        Create article
                      </Link>
                    }
                    </li>
                  </ul>
                  
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      {!isAuth &&
                      <Link to="/login" className="ml-4 btn btn-dark mt-1 btn-sm">
                        Login
                      </Link>
                      }
                    </li>
                    <li className="nav-item">
                    {isAuth &&
                      <button to="/logout" className="ml-4 btn btn-dark mt-1 btn-sm"
                        onClick={logoutMe}
                      >
                        Logout
                      </button>
                      }
                    </li>
                    <li className="nav-item">
                      
                    {!isAuth &&
                      <Link to="/register" className="ml-4 btn btn-dark mt-1 btn-sm">
                        Register
                      </Link>
                    }
                    </li>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    )
}