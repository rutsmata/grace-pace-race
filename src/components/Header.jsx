export default function Header () {
  return (
    <div>
      {/* page First Navigation */}
    <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="public/imgs/logo.svg" alt="" />
      </a>
      <div className="socials">
        <a href="javascript:void(0)">
          <i className="ti-facebook" />
        </a>
        <a href="javascript:void(0)">
          <i className="ti-twitter" />
        </a>
        <a href="javascript:void(0)">
          <i className="ti-pinterest-alt" />
        </a>
        <a href="javascript:void(0)"> <i className="ti-instagram" />
        </a>
        <a href="javascript:void(0)">
          <i className="ti-youtube" />
        </a>
      </div>
    </div>
  </nav>
  {/* End Of First Navigation */}
    </div>
  )
}