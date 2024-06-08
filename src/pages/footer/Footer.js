import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div class="Footer">
    <div class="container">
    <div class="sec products">
      <h2>Products</h2>
      <ul class="products">
        <li><a href="#">Phone (2a)</a></li>
        <li><a href="#">Phone (2)</a></li>
        <li><a href="#">Ear (a)</a></li>
        <li><a href="#">Ear</a> </li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Apparel</a></li>
      </ul>
    </div>
    <div class="sec company">
      <h2>Company</h2>
      <ul class="company">
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Business enquiry</a></li>
          <li><a href="#">Press contact</a></li>
      </ul>
    </div>
    <div class="sec support">
      <h2>Support</h2>
      <ul class="support">
        <li><a href="#">Support centre</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Contact us via</a></li>
        <li><a href="#">WhatsApp</a></li>
        <li><a href="#">Service centre</a></li>
        <li><a href="#">E-waste</a></li>
        <li><a href="#">Management</a></li>
        <li><a href="#">Find a store</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">Vulnerability</a></li>
        <li><a href="#">Report</a></li>
      </ul>
    </div>
    <div class="sec email">
      <h2>JOIN OUR MAILING LIST</h2>
      <input type="email" class="email" id="email" placeholder="EMAIL ADDRESS"></input>
    </div>
    </div>
    <hr></hr>
    <div class="bottom-sec">
    <h2>Privacy policy</h2>
    <h2>Warranty policy</h2>
    <h2>Acceptable use policy</h2>
    <h2>User agreement</h2>
    <div class="social-icons">
   <a href="#"><i class="fa-brands fa-instagram"></i></a>
   <a href="#"><i class="fa-brands fa-youtube"></i></a>
   <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
   <a href="#"><i class="fa-brands fa-tiktok"></i></a>
   <a href="#"><i class="fa-brands fa-discord"></i></a>
    </div>
    <h2><a href="#">India</a></h2>

    </div>
    </div>
  )
}

export default Footer
