import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        
           
<div class="footer">
    <div class="footer1">
    <div class="footeritem footeritem1">
        <h3> Downnload our app from android and Iphone</h3>

     
        <img src="/resources/logo/playstore.jpg" height="100px"/>
        <img src="/resources/logo/appstore.png" height="70px"/>
    </div>

<div class="footeritem footeritem2"> 
    <a href="">About</a><br/>
    <a href="">Refund Policy</a>
</div>

    <div class="footeritem footeritem3">
        <p>Follow us on</p>
 <a href="">Facebook</a><br/>
 <a href="">Instagram</a><br/>
 <a href="">Twitter</a><br/>
 <a href="">Youtube</a><br/>
    </div>

    <div class="footeritem footeritem3">
        <h2>Sign up for newsletter</h2>
    <input type="text" placeholder="Email address" class="email-input"/>
    <button class="email-btn">Signup</button>
    </div>

</div>
<div class="weaccept"><p>WE accept</p> </div>
    <div class="footerpay">      
<img src="/resources/paylogo/pay1.png" height="50px"/>
<img src="/resources/paylogo/pay2.png" height="50px"/>
<img src="/resources/paylogo/pay3.png" height="50px"/>
<img src="/resources/paylogo/pay4.png" height="50px"/>
<img src="/resources/paylogo/pay5.png" height="50px"/>
<img src="/resources/paylogo/pay6.png" height="50px"/>
</div>

<div class="cpr">
<hr style = {{color:"white"}}/>
<p>&copy; 2021 All Rights Reserved</p>
</div>
</div>
 
        
    )
}

export default Footer
