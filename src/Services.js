import React from "react";
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div>
        <div className="services_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="services_taital">Our Ice Cream Services</h1>
                  <p className="services_text">tempor incididunt ut labore et dolore magna aliqua</p>
               </div>
            </div>
            <div className="services_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="services_box">
                        <h5 className="tasty_text"><span className="icon_img"><img src="assets/images/icon-1.png"/></span>Cookies Ice Cream</h5>
                        <p className="lorem_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="services_box">
                        <h5 className="tasty_text"><span className="icon_img"><img src="assets/images/icon-2.png"/></span>Cookies Ice Cream</h5>
                        <p className="lorem_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="services_box">
                        <h5 className="tasty_text"><span className="icon_img"><img src="assets/images/icon-1.png"/></span>Cookies Ice Cream</h5>
                        <p className="lorem_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="seemore_bt"><Link to="#">Read More</Link></div>
         </div>
      </div>
      
      <div className="copyright_section margin_top90">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <Link to="https://html.design">Free Html Templates</Link></p>
         </div>
      </div>
        </div>
    );
}

export default Services;