// import {Link} from 'react-router-dom'
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
              {/* should be <Link to="/articles">Новини</Link> */}
              <a className="nav-link" href="index.html">
                Новини
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Тест драйв
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Създай новина
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Електрически автомобили
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Регистрация
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Заглавна страница
              </a>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="index.html" className="ml-4 btn btn-dark mt-1 btn-sm">
                Вход
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
        </div>
    )
}