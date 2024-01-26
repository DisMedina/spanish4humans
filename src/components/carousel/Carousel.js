import React, { Component } from "react";
import Slider from "react-slick";
import ActionAreaCard from "../actionAreaCard/actionAreaCard";
import ActionImageCard from "../actionAreaCard/actionImageCard";

import "./Carousel.css";

export default class Carousel extends Component {
  render() {
    const { data, onlyImages } = this.props;

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
            // Use a ternary operator to conditionally render either ActionAreaCard or ActionImageCard
            onlyImages ? (
              <ActionImageCard
                key={item.id}
                index={item.id}
                image={item.image}
              />
            ) : (
              <ActionAreaCard
                key={item.id}
                index={item.id}
                title={item.title}
                body={item.body}
                image={item.image}
                snippet={item.snippet}
              />
            )
          ))}
        </Slider>
      </div>
    );
  }
}
