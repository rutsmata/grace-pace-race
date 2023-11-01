import Counter from "./Counter"

export default function Footer () {
    return (
        <div>

         {/* Page Footer */}
    <footer className="page-footer">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
            <img src="public/imgs/logo.svg" alt="" className="logo" />
          </div>
          <div className="col-md-9 text-center text-md-right">
            <div className="socials">
              <a
                href="javascript:void(0)"
                className="font-weight-bold text-muted mr-4"
              >
                <i className="ti-facebook pr-1" /> 123,345
              </a>
              <a
                href="javascript:void(0)"
                className="font-weight-bold text-muted mr-4"
              >
                <i className="ti-twitter pr-1" /> 321,534
              </a>

                <Counter/>

              <a
                href="javascript:void(0)"
                className="font-weight-bold text-muted mr-4"
              >
                <i className="ti-instagram pr-1" /> 123,023
              </a>
              <a
                href="javascript:void(0)"
                className="font-weight-bold text-muted mr-4"
              >
                <i className="ti-youtube pr-1" /> 231,043
              </a>
            </div>
          </div>
        </div>
        <p className="border-top mb-0 mt-4 pt-3 small">
          © , JoeBlog Created By{" "}
        
          All rights reserved{" "}
        </p>
      </div>
    </footer>   
        </div>
    )
}