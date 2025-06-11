import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>

        <div className="header_section">
         <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="navbar-brand" to="/home"><img src="assets/images/logo.png"/></Link>
               {/* <img src="assets/images/logo.png"/> */}
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <Link className="nav-link" to="home">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="icecream">Icecream</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="services">Services</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="blog">Blog</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="contact">Contact Us</Link>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt"><Link to="#">Login <span style={{color:' #222222'}}><i className="fa fa-user" aria-hidden="true"></i></span></Link></div>
                     <div className="fa fa-search form-control-feedback"></div>
                  </form>
               </div>
            </nav>
         </div>
         
         
         
      </div>


        </div>
    );
}

export default Header;