import React from "react";
import "./Services.css";
import "./cardAnimation.css"

const Services = ({ title, body, containerClass }) => {
    return (
        <div className={`container service${containerClass}`}>

          <div class="ag-format-container">
          <div class="ag-courses_box">
            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
  
                <div class="ag-courses-item_title">
                  {title}
                </div>
  
                <div class="ag-courses-item_date-box">
                  <span class="ag-courses-item_date">
                    {body}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
            </div>

  );
};

export default Services;