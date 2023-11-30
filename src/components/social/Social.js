import React from "react";
import "./Social.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Social = () => {
  return (
        <div className="social-icons">

          <div className="social-icon">
            <FaFacebookF />
          </div>

          <div className="social-icon">
            <FaInstagram />
          </div>

          <div className="social-icon">
            <FaTwitter />
          </div>
          
          <div className="social-icon">
            <FaLinkedin />
          </div>
          
          <div className="social-icon">
            <FaTiktok />
          </div>
        </div>
  );
};

export default Social;
