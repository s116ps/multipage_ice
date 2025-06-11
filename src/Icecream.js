import React from "react";
import { Link } from 'react-router-dom';

function Icecream() {
    return (
        <div>

<div className="cream_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="cream_taital">Our Featured Ice Cream</h1>
                  <p className="cream_text">tempor incididunt ut labore et dolore magna aliqua</p>
               </div>
            </div>
            <div className="cream_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-1.png"/></div>
                        <div className="price_text">$10</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-2.png"/></div>
                        <div className="price_text">$10</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-1.png"/></div>
                        <div className="price_text">$10</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="cream_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-3.png"/></div>
                        <div className="price_text">$10</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-4.png"/></div>
                        <div className="price_text">$10</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-5.png"/></div>
                        <div className="price_text">$10</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="seemore_bt"><Link to="#">See More</Link></div>
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

export default Icecream;