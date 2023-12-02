import React from "react";
import { useNavigate } from "react-router-dom";
import "./Semblance.css";
import "aos/dist/aos.css";

const Semblance = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/aboutus");
  };

  return (
    <section id="s4h_semblance" className="section-background2">
      <div className="container-diamond">
        <div className="img-background" />
        <div className="inner-container">
          <h2 className="h-titleS">SEMBLANCE</h2>
          <h2 className="h-titleSub">
            Unlocking <span className="highlighted-text">Spanish</span>: Language{" "}
            <span className="highlighted-text">Learning</span> for the Curious Minds.
          </h2>

          <p className="card-text">
            ¡Hola! My name is Patricia, and I am a Spanish native speaker from Mexico City. I’m certified as a Spanish instructor as a Foreign Language from the Universidad Nacional Autónoma de México. 
            I’ve been teaching Spanish since 2016, with students of any age and every level, from basic words to test preparation (DELE), Spanish for tourism, Spanish for teachers, and Mexican cooking.
            Learning can be fun, relaxed and based on your needs. If you don't find it easy to adjust to the formal school schedule, this is the place for you! My goal is for you to enjoy and learn at your own pace!
            Contact me for a free trial lesson!
          </p>
          <button className="slide" onClick={handleButtonClick}>
            Know more about your teacher
          </button>
        </div>
      </div>
    </section>
  );
};

export default Semblance;
