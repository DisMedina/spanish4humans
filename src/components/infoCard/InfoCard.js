import React from "react";
import './InfoCard.css';

const InfoCard = ({ side, img, title, information }) => {
    return (
       <div className={`card-Container${side}`}> 
            <div className={`card-info-container${side}`}>
                <p className={`card-info-title${side}`}>{title}</p>
                <h2 className={`card-location-title${side}`}>{information}</h2>
            </div>
       </div>     
    );
};

export default InfoCard;