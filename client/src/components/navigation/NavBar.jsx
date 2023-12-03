import { useContext } from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';
import Path from '../../paths';

export default function NavBar () {

    const {
      isAuth,
      username,
    } = useContext(AuthContext);
  
    return (
        <div>

            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
              <div className="container">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to={Path.Home} className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={Path.Articles} className="nav-link">Articles</Link>
                      </li>
                    </ul>

                    {isAuth &&
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to={Path.TestDrive} className="nav-link">Test drive</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={Path.CreateArticle} className="nav-link">Create article</Link>               
                      </li>
                      <li className="nav-item">
                      <Link to={Path.Logout} className="ml-4 btn btn-dark mt-1 btn-sm">Logout</Link>
                      </li>
                      
                      <span className="nav-item">|  Welcome {username}!</span>
                    </ul>
                    }

                    {!isAuth &&
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={Path.Login} className="ml-4 btn btn-dark mt-1 btn-sm">Login</Link>
                    </li>

                    <li className="nav-item">
                      <Link to={Path.Register} className="ml-4 btn btn-dark mt-1 btn-sm">Register</Link>
                    </li>
                  </div>
                    }

                </div>
              </div>
            </nav>
        </div>
    )
}