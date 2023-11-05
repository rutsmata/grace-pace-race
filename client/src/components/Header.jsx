export default function Header () {
  return (
    <div>
          <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="https://www.gracepacerace.com/" target="_blank">
              <img src="public/imgs/gracepacerace-logo.jpg" alt="" />
            </a>
            <div className="socials">
              <a href="https://www.facebook.com/gracepacerace/" target="_blank">
                <i className="ti-facebook pr-1" />
              </a>
              <a href="https://www.instagram.com/gracepacerace/" target="_blank"> 
              <i className="ti-instagram pr-1" /> 6 800
              </a>
            </div>
          </div>
        </nav>
    </div>
  )
}