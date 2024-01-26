import React from "react";
import "./Social.css";
import { FaInstagram } from "react-icons/fa";

const Social = () => {
  const instagramLink = "https://www.instagram.com/spanishforhumans?igsh=MW40M3Fqc2xvOHkxdw%3D%3D&utm_source=qr";

  const handleInstagramClick = () => {
    window.location.href = instagramLink;
  };

  return (
    <div className="social-icons">
      <div className="social-icon" onClick={handleInstagramClick}>
        <FaInstagram />
      </div>
    </div>
  );
};

export default Social;
