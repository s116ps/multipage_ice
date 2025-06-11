import React from "react";
import { Link } from 'react-router-dom';

function About() {
    return(
        <div>

      
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_img"><img src="assets/images/about-img.png"/></div>
               </div>
               <div className="col-md-6">
                  <h1 className="about_taital">About Icecream</h1>
                  <p className="about_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euconsectetur adipiscing esequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                  <div className="read_bt_1"><Link to="#">Read More</Link></div>
               </div>
            </div>
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

export default About;