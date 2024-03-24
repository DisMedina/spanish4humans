import React, { useEffect } from "react";
import './AlumniPage.css';
import { useLocation } from 'react-router-dom';


const AlumniPage = () => {
  const location = useLocation();
  const { state } = location;

  const { title, body, image } = state;
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="spacer" />
      <section className="section-background2">
        <div className="container-diamond">
          <div className="inner-container">
            <h2 className="h-titleS">About them</h2>
            <h2 className="h-titleSub">
              My Journey: <span className="highlighted-text"> {title}</span>
            </h2>

            <p className="card-text">
              {body}
            </p>
          </div>
          <div className="img-background-about" style={divStyle} />
        </div>
        <div className="spacer" />
      </section>
    </>
  );
};

export default AlumniPage;
