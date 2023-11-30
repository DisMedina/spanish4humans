import React from "react";
import {
    Header,
    Semblance,
    ServiceCards,
    Carousel,
    Missionvision,
  } from "../../components";
  import './TeacherPage.css';

const TeacherPage = () => {
    return (
        <>
        <header className="header-bg">
        <section className="section-background2">
      <div className="container-diamond">
        <div className="img-background" />
        <div className="inner-container">
          <h2 className="h-titleS">SEMBLANCE</h2>
          <h2 className="h-titleSub">
            Unlocking <span className="highlighted-text">Spanish</span>: Language{" "}
            <span className="highlighted-text">Learning</span> for the Curious Minds.
          </h2>

          <p className="card-text">
            ¡Hola! My name is Patricia and I am a native speaker of Spanish from Mexico. I
            have certification to teach Spanish as a Second Language from the Universidad
            Nacional Autónoma de México and have a degree in Drama from the same university.
            I have also taken a lot of courses on virtual teaching. I have been teaching
            Spanish since 2016, mainly to adolescents and adults. I specialize in test
            preparation (DELE), Spanish for tourism, Spanish for teachers, and Mexican
            cooking. contact me for a free trial lesson!
          </p>
        </div>
      </div>
    </section>
        </header>
        </>
    );
};

export default TeacherPage;
