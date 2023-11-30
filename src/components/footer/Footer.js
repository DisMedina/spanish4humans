import React from "react";
import "./Footer.css";
import Social from '../social/Social.js'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container_footer footer">
        <div className="footer-box">
          <h4>Lets Connect</h4>
          <div className="footer-links">
            <Social />
          </div>
          <div className="footer-contact u-text-small">
            <a href="wwww.spanishforhumans.com"> wwww.spanishforhumans.com </a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact</h4>
          <div className="footer-contact u-text-small">
            <a href="humanslearnspanish@gmail.com"> humanslearnspanish@gmail.com </a> 
          </div>
        </div>
        <div className="footer-box">
          <h4>Legal</h4>
          <div className="footer-contact u-text-small hidden">
            <a href="#"> Terms & conditions </a> 
          </div>
          <div className="footer-contact u-text-small">
            <a href="/privacypolicy"> Privacy policy </a>
          </div>
        </div>
        <div className="footer-box hidden">
          <h4>More about Spanish For Humans</h4>
          <div className="footer-contact u-text-small">
          <div className="footer-contact u-text-small">
            <a href="#"> Blog </a> 
          </div>
          <div className="footer-contact u-text-small">
            <a href="#"> FAQ </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
