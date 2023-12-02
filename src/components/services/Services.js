import React from "react";
import "./Services.css";
import "./cardAnimation.css";

const obfuscatedNumber = "MTU1NDc3ODkwNDc=";
const Services = ({ title, body, detalles, message }) => {
  const decodeNumber = (obfuscated) => {
    return atob(obfuscated);
  };

  const sendWhatsAppMessage = () => {
    console.log(message);
    const decodedNumber = decodeNumber(obfuscatedNumber);
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${decodedNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={`container servicesList`}>
      <li className="card">
        {title}
        <div className="card-body">
          <p className="card-text bolder">{body}</p>
          <p className="card-text">{detalles}</p>
          <button className="card-button" onClick={sendWhatsAppMessage}>
            Contact via WhatsApp
          </button>
        </div>
      </li>
    </div>
  );
};

export default Services;