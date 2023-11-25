import { useContext } from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';

export default function NavBar () {

    const {
      isAuth,
      username,
    } = useContext(AuthContext);
  
    function logoutMe() {
      localStorage.removeItem('token');
      location.reload();
    }

    return (
        <div>

            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
              <div className="container">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/articles" className="nav-link">Articles</Link>
                      </li>
                    </ul>

                    {isAuth &&
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/test-drive" className="nav-link">Test drive</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/articles/create" className="nav-link">Create article</Link>               
                      </li>
                      <li className="nav-item">
                      <button className="ml-4 btn btn-dark mt-1 btn-sm" onClick={logoutMe}>Logout</button>
                      </li>
                      
                      <span className="nav-item">|  Welcome {username}!</span>
                    </ul>
                    }

                    {!isAuth &&
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/login" className="ml-4 btn btn-dark mt-1 btn-sm">Login</Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/register" className="ml-4 btn btn-dark mt-1 btn-sm">Register</Link>
                    </li>
                  </div>
                    }

                </div>
              </div>
            </nav>
        </div>
    )
}