import React from "react";
import "./Carousel.css";

const items = [
    "Participant Name",
    "Participant Name",
    "Participant Name",
    "Participant Name",
  ];

const Carousel = () => {
  return (
    <div class="carousel">
      <div class="carousel-arrow">❮</div>
      <div class="carousel-wrapper">
        {items.map((item) => {
          return (
            <div class="participant" key={item}>
              <div class="outer-circle">
                <div class="inner-circle"></div>
              </div>
              <div class="participant-name">{item}</div>
            </div>
          );
        })}
      </div>
      <div class="carousel-arrow">❯</div>
    </div>
  );
};

export default Carousel;
