import React from "react";
import { Link } from "react-router-dom";

function Blog () {
    return (
        <div>

            <div className="testimonial_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="testimonial_taital">Testimonial</h1>
               </div>
            </div>
            <div className="testimonial_section_2">
               <div className="row">
                  <div className="col-md-12">
                     <div className="testimonial_box">
                        <div id="main_slider" className="carousel slide" data-ride="carousel">
                           <div className="carousel-inner">
                              <div className="carousel-item active">
                                 <p className="testimonial_text">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                 <h4 className="client_name">Marri Fen</h4>
                                 <div className="client_img"><img src="assets/images/client-img.png"/></div>
                              </div>
                              <div className="carousel-item">
                                 <p className="testimonial_text">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                 <h4 className="client_name">Marri Fen</h4>
                                 <div className="client_img"><img src="assets/images/client-img.png"/></div>
                              </div>
                              <div className="carousel-item">
                                 <p className="testimonial_text">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                 <h4 className="client_name">Marri Fen</h4>
                                 <div className="client_img"><img src="assets/images/client-img.png"/></div>
                              </div>
                           </div>
                           <Link className="carousel-control-prev" to="#main_slider" role="button" data-slide="prev">
                           <i className="fa fa-angle-left"></i>
                           </Link>
                           <Link className="carousel-control-next" to="#main_slider" role="button" data-slide="next">
                           <i className="fa fa-angle-right"></i>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <Link to="https://html.design">Free Html Templates</Link></p>
         </div>
      </div>


        </div>
    );
}

export default Blog;