import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "./Carousel.css";

const Carousel = ({ data, onlyImages }) => {
  const navigate = useNavigate();

  const handleButtonClick = (item) => {
    console.log(item.id);
    navigate(`/aboutthem/${item.id}`, {
      state: {
        title: item.title,
        body: item.body,
        image: item.image,
      },
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  return (
    <div id="s4h_carousel" className="carousel-background">
      <Slider {...settings}>
        {data.map((item) => (
          onlyImages ? (
            <div className="carouselCard" key={item.id}>
              <img src={item.image} alt="Slider" className="carouselCard-image" />
            </div>
          ) : (
            <div className="carouselCard" key={item.id}>
              <img src={item.image} alt="Slider" className="carouselCard-image" />
              <div className="carouselCard-content">
                <p className="carouselCard-text">{item.body}</p>
                <button className="carouselCard-button" onClick={() => handleButtonClick(item)}>Know more about my experience</button>
              </div>
            </div>
          )
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
