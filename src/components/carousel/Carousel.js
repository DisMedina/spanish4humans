import React, { Component } from "react";
import Slider from "react-slick";
import { testimonies } from "../datasets/testimony_data";
import ActionAreaCard from "./testimony";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 8000,
      cssEase: "linear"
    };
    return (
      <div>
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings}>
        {testimonies.map((testimonies) => (
          <ActionAreaCard
            key={testimonies.id}
            index={testimonies.id}
            title={testimonies.title}
            body={testimonies.body}
            image={testimonies.image}
          />
        ))}
        </Slider>
      </div>
    );
  }
}