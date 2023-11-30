import React from "react";
import "./Services.css";
import "./cardAnimation.css"

const Services = ({ title, body, containerClass }) => {
    return (
        <div className={`container servicesList` }>
          <li className="card" >
            {title}
            <div className="card-body">
              <p className="card-text">{body}</p>
            </div>
          </li>
        </div>
  );
};

export default Services;