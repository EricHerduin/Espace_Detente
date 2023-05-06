import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/style.css";

function Slider({ data }) {
  console.log(data.modeleimage);
  return (
    <Carousel>
      {data.modeleimage.map((slide) => (
        <div key={slide}>
          <img src={slide} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
