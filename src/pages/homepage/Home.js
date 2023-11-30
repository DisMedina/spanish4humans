import React from "react";
import {
    Header,
    Semblance,
    ServiceCards,
    Carousel,
    Missionvision,
  } from "../../components";
  import './Home.css';

const HomePage = () => {
    return (
        <>
        <header className="header-bg">
            <Header data-aos="fade-left"/>
            <Semblance data-aos="fade-up"/>
            <Missionvision data-aos="fade-up"/>
            <ServiceCards data-aos="fade-right"/>
            <Carousel/>
        </header>
        </>
    );
};

export default HomePage;
