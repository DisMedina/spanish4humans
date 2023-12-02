import React, { useEffect } from "react";
import './TeacherPage.css';
import { aboutPictures } from "../../components/datasets";
import { Carousel } from "../../components";

const TeacherPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="spacer" />
      <section className="section-background2">
        <div className="container-diamond">
          <div className="inner-container">
            <h2 className="h-titleS">About Me</h2>
            <h2 className="h-titleSub">
              Journey into <span className="highlighted-text">Expertise</span>: About the <span className="highlighted-text">Teacher</span>
            </h2>

            <p className="card-text">
              Patricia Rivera is a Mexican screenwriter, writer, playwright and film director with a degree in Dramatic Literature and Theater from the National
              Autonomous University of Mexico (UNAM) and a degree in Film writing and directing from Faculty of Filmmaking. She has a degree in Spanish as a Foreign
              Language from CEPE UNAM and has seven years of experience with groups of children, teenagers, adults and seniors. She uses are mixed and personalized
              teaching techniques according to the needs of each student. She has over 3200 hours of teaching Spanish as a foreign language in front of students since
              2016.
            </p>
          </div>
          <div className="img-background-about" />
        </div>
        <div className="spacer" />
        <Carousel data={aboutPictures} onlyImages={true}/>
      </section>
    </>
  );
};

export default TeacherPage;
