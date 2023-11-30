import React, { useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="s4h_home">
      <div class='b-image'/>
      <div className="header">
        <div className="header-left header-title" data-aos="fade-right">
          <h1>
            <span>
              Spanish for Humans
            </span>
          </h1>
          <p className="u-text-small long">
            Learning Spanish with a Human Touch
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
