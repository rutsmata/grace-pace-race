export default function Header () {
  return (
    <div>
      {/* page First Navigation */}
    <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="https://www.gracepacerace.com/" target="_blank">
        <img src="public/imgs/gracepacerace-logo.jpg" alt="" />
      </a>
      <div className="socials">
        <a href="https://www.facebook.com/gracepacerace/" target="_blank">
          <i className="ti-facebook" />
        </a>
        <a href="https://www.instagram.com/gracepacerace/" target="_blank"> <i className="ti-instagram" />
        </a>
      </div>
    </div>
  </nav>
  {/* End Of First Navigation */}
    </div>
  )
}