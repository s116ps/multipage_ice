import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
<div>

        <div className="banner_section layout_padding">
            <div className="container">
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="3">04</li>
                  </ol>
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Ice Cream</h1>
                              <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <div className="started_text"><Link to="#">Order Now</Link></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img src="assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Ice Cream</h1>
                              <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <div className="started_text"><Link to="#">Order Now</Link></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img src="assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Ice Cream</h1>
                              <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <div className="started_text"><Link to="#">Order Now</Link></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img src="assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-6">
                              <h1 className="banner_taital">Ice Cream</h1>
                              <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                              <div className="started_text"><Link to="#">Order Now</Link></div>
                           </div>
                           <div className="col-sm-6">
                              <div className="banner_img"><img src="assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      
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
                        <div className="price_text">$30</div>
                        <h6 className="strawberry_text">Delight Colourful - Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-2.png"/></div>
                        <div className="price_text">$20</div>
                        <h6 className="strawberry_text">Correnet Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-1.png"/></div>
                        <div className="price_text">$30</div>
                        <h6 className="strawberry_text">Delight Colourful - Ice Cream</h6>
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
                        <div className="price_text">$25</div>
                        <h6 className="strawberry_text">Butterscotch Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-4.png"/></div>
                        <div className="price_text">$15</div>
                        <h6 className="strawberry_text">Chocolate Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="cream_box">
                        <div className="cream_img"><img src="assets/images/img-5.png"/></div>
                        <div className="price_text">$20</div>
                        <h6 className="strawberry_text">Strawberry Ice Cream</h6>
                        <div className="cart_bt"><Link to="#">Add To Cart</Link></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="seemore_bt"><Link to="#">See More</Link></div>
         </div>
      </div>
      
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
                                 <p className="testimonial_text">time falls as labor and great pain some. For I come to the least, who is our exercise any labor except as some from it convenient consequence. Two or three pain in reprehend in pleasure want to be a little pain in fleeing nothing to be born. Excepteur are</p>
                                 <h4 className="client_name">Marri Fen</h4>
                                 <div className="client_img"><img src="assets/images/client-img.png"/></div>
                              </div>
                              <div className="carousel-item">
                                 <p className="testimonial_text">time falls as labor and great pain some. For I come to the least, who is our exercise any labor except as some from it convenient consequence. Two or three pain in reprehend in pleasure want to be a little pain in fleeing nothing to be born. Excepteur are</p>
                                 <h4 className="client_name">Marri Fen</h4>
                                 <div className="client_img"><img src="assets/images/client-img.png"/></div>
                              </div>
                              <div className="carousel-item">
                                 <p className="testimonial_text">time falls as labor and great pain some. For I come to the least, who is our exercise any labor except as some from it convenient consequence. Two or three pain in reprehend in pleasure want to be a little pain in fleeing nothing to be born. Excepteur are</p>
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
      
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="contact_main">
                     <h1 className="contact_taital">Contact Us</h1>
                     <form action="/action_page.php">
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Name" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Email" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Phone Number" name="Email"/>
                        </div>
                        <div className="form-group">
                           <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Massage"></textarea>
                        </div>
                     </form>
                     <div className="main_bt"><Link to="#">SEND</Link></div>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="location_text">
                     <ul>
                        <li>
                           <Link to="#">
                           <span className="padding_left_10 active"><i className="fa fa-map-marker" aria-hidden="true"></i></span>Making this the first true</Link>
                        </li>
                        <li>
                           <Link to="#">
                           <span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>Call : +01 1234567890
                           </Link>
                        </li>
                        <li>
                           <Link to="#">
                           <span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>Email : demo@gmail.com
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="mail_main">
                     <h3 className="newsletter_text">Newsletter</h3>
                     <div className="form-group">
                        <textarea className="update_mail" placeholder="Enter Your Email" rows="5" id="comment" name="Enter Your Email"></textarea>
                        <div className="subscribe_bt"><Link to="#">Subscribe</Link></div>
                     </div>
                  </div>
                  <div className="footer_social_icon">
                     <ul>
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                     </ul>
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

export default Home;