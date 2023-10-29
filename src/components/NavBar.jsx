export default function NavBar () {
    return (
        <div>

                {/* Page Second Navigation */}
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
              <a className="nav-link" href="index.html">
                Новини
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="no-sidebar.html">
                Тест драйв
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="single-post.html">
                Електрически автомобили
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Моторспорт
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="components.html" className="ml-4 btn btn-dark mt-1 btn-sm">
                Components
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
    {/* End Of Page Second Navigation */}
        </div>
    )
}