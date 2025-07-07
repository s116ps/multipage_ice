import React from 'react'
import { Link, Scripts } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Login() {

    const [uname,setuName] = useState('');
    const [unames,setuNames] = useState([]);
    const [email,setEmail] = useState('');
    const [emails,setEmails] = useState([]);
    const [phoneno,setPhoneno] = useState('');
    const [phonenos,setPhonenos] = useState([]);
    const [pwd,setPwd] = useState('');
    const [pwds,setPwds] = useState([]);
    const [msg,setMsg] = useState('');
    const [msgs,setMsgs] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
    };
    
  return (
    
    <div>

        <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="contact_main">
                     <h1 className="login_title">Login</h1>
                     
                     <form action="/action_page.php" >
                        <div className="form-group">
                           <input id="uname" type="text" className="uname-bt" placeholder="Enter Your UserName" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input id="pwd" type="password" className="uname-bt" placeholder="Enter Your Password" name="Name"/>
                        </div>
                        {/* <div className="form-group">
                           <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email"/>
                        </div>
                        <div className="form-group">
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        </div> */}
                     </form>
                     <div className="main_bt"><Link to="#">Login</Link></div>
                     <div className="cancel_bt"><Link to="#" >Cancel</Link></div><br></br>
                     <div className="signup_line">Don't have account? please <u>SignUp</u> first</div>
                  </div>
               </div>

                <div className="col-md-4">
                  <div className="contact_right">
                     <h1 className="login_title">SignUp</h1>
                     
                     <form onSubmit={handleSubmit}>
                        <div className="form-group">
                           <input id="uname" value={uname} onChange={(e)=>setuName(e.target.value)} type="text" className="email-bt" placeholder="Enter Your FirstName" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input id="uname" value={uname} onChange={(e)=>setuName(e.target.value)} type="text" className="email-bt" placeholder="Enter Your LastName" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="email-bt" placeholder="Enter Your EmailId" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input type="text" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} className="email-bt" placeholder="Phone Number" name="Email"/>
                        </div>
                        <div className="form-group">
                           <input id="pwd" value={pwd} onChange={(e)=>setPwd(e.target.value)} type="password" className="email-bt" placeholder="Enter Your Password" name="Name"/>
                        </div>
                        <div className="form-group">
                           <input id="confirm_pwd" type="password" className="email-bt" placeholder="Re-type Your Password" name="Name"/>
                        </div>
                        <div className="form-group">
                           <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} className="massage-bt" placeholder="Message" rows="5" id="comment" name="Massage"></textarea>
                        </div>
                        {/* <div className="main_bt_bt">
                            <button className='main_bt_bt' type='submit'><Link to="#">SignUp</Link></button>
                        </div>
                        <div className="cancel_bt"><Link to="#" >Cancel</Link></div> */}
                     </form>
                     <div className="main_bt"><Link to="#">SignUp</Link></div> 
                     <div className="cancel_bt"><Link to="#" >Cancel</Link></div>
                  </div>
               </div>

               {/* <div className="col-md-8">
                  <div className="location_text">
                     <ul>
                        <li>
                           <Link to="#">
                           <span className="padding_left_10 active"><i className="fa fa-map-marker" aria-hidden="true"></i></span>Making this the first true</Link>
                        </li>
                        <li>
                           <Link to="#">
                           <span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>Call : +91 9843886976
                           </Link>
                        </li>
                        <li>
                           <Link to="#">
                           <span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>Email : prabu@gmail.com
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
               </div> */}
            </div>
         </div>
      </div>
      
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2025 All Rights Reserved. Design by <Link to="https://html.design">Prabushankar Html Templates</Link></p>
         </div>
      </div>



    </div>
  )
}

export default Login