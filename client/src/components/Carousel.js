import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel1 from "../static/images/nile.png";

const slides = [
  {
    img: Carousel1,
  },
];

const Slider = () => {
  return (
    <Fragment>
      <h2>Featured</h2>
      <hr />
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="responsive-item-16-10">
              <img
                className="d-block w-100 slide"
                src={slide.img}
                alt={slide.name}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fragment>
  );
};
export default Slider;
