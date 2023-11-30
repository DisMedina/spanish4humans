import React from "react";
import { services } from "../datasets/servicecardsdata-one";
import { Services } from "../../components";
import "./servicecards.css"
import "aos/dist/aos.css";

const ServiceCards = () => {
  return (
    <section id="s4h_servicecards" className="section-background2">
     <div className="container-section-home">
     <div className="container-section-home-title-section"><h1><span className="underlined-text">Learning</span> Hub: Course <span className="highlighted-text">Offerings</span> and <span className="highlighted-text">Timetable</span></h1></div>
        <div className="container-proposition">
          {services.map((service) => (
            <Services
              key={service.id}
              clase = {service.clase}
              icon = {service.icon}
              title={service.title}
              body={service.body}
              detalles={service.detalles}
              containerClass={''}
            />
          ))}
        </div>
     </div>
    </section>
  );
};

export default ServiceCards;
