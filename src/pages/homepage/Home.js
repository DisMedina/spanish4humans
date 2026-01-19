import React from "react";
import {
    Header,
    Semblance,
    ServiceCards,
    Carousel,
    Missionvision,
  } from "../../components";
  import { testimonies } from "../../components/datasets";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Semblance />
            <Missionvision />
            <ServiceCards />
            <Carousel data={testimonies} />
        </div>
    );
};

export default HomePage;
