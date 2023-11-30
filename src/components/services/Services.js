import React from "react";
import "./Services.css";
import "./cardAnimation.css"

const Services = ({ title, body, containerClass, detalles }) => {
    return (
        <div className={`container servicesList` }>
          <li className="card" >
            {title}
            <div className="card-body">
              <p className="card-text bolder">{body}</p>
              <p className="card-text">{detalles}</p>
            </div>
          </li>
        </div>
  );
};

export default Services;