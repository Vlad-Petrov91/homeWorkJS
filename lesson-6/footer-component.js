const footerTemp = `<footer>
<div class="footer__menu container">
   <div class="footer__menu__element"><img src="img/delivery.svg" alt="devivery">
       <h3>Free Delivery</h3>
       <p>Worldwide delivery on all. Authorit tively morph next-generation
           innov tion with extensive models.
       </p>
   </div>
   <div class="footer__menu__element footer__menu__element_margin"><img src="img/sales.svg" alt="percent">
       <h3>Sales & discounts</h3>
       <p>Worldwide delivery on all. Authorit tively morph next-generation
           innov tion with extensive models.
       </p>
   </div>
   <div class="footer__menu__element"><img src="img/quality.svg" alt="quality">
       <h3>Quality assurance</h3>
       <p>Worldwide delivery on all. Authorit tively morph next-generation
           innov tion with extensive models.
       </p>
   </div>
</div>
<div class="footer__subscribe_panel_bg">
   <div class="footer__subscribe_panel container">
       <div class="footer__subscribe_panel_info">
           <img src="img/face.png" alt="photo">
           <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a
                   pulvinar purus condimentum</i> “
           </p>
       </div>
       <div class="footer__subscribe_panel_form">
           <div class="footer__subscribe_panel_form_heating">
               <h3>SUBSCRIBE</h3>

               <p>FOR OUR NEWLETTER AND PROMOTION
               </p>
           </div>
           <form class="form_subscribe" action="#">
               <input class="input" id="mail" type="text"
                  
                   placeholder="Your email">
               <button class="subscribe_button" type="submit">Subscribe</button>
           </form>
       </div>
   </div>
</div>
<div class="footer__bottom">

   <div class="footer__bottom_copyright">
       <p>© 2021 Brand All Rights Reserved.</p>
   </div>
   <div class="footer__bottom_social_networks">
       <div class="social_networks_logo"><a href="https://www.facebook.com/"><img src="img/facebook.svg"
                   alt="facebook"></a></div>
       <div class="social_networks_logo"><a href="https://www.instagram.com/"><img src="img/insta.svg"
                   alt="instagram"></a></div>
       <div class="social_networks_logo"><a href="https://www.pinterest.ru/"><img src="img/pinterest.svg"
                   alt="pinterest"></a></div>
       <div class="social_networks_logo"><a href="https://twitter.com/"><img src="img/twitter.svg"
                   alt="twitter"></a></div>
   </div>
</div>


</footer>`

Vue.component("footer-component", {
   template: footerTemp
})