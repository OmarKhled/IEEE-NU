import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel1 from "../static/images/CarouselPhotos/1.jpg";
import Carousel2 from "../static/images/CarouselPhotos/2.jpg";
import Carousel3 from "../static/images/CarouselPhotos/3.jpg";
import spaceSummit from "../static/images/EgyptianSummit.jpeg";
import store from "../static/images/store.png";

// import Slider from "react-slick";
import { Divider } from "semantic-ui-react";

const slides = [
  {
    img: spaceSummit,
  },
  {
    img: store,
  },
  {
    img: Carousel2,
  },
  {
    img: Carousel3,
  },
];

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <h2>Featured</h2>
      <hr />
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 slide"
              src={slide.img}
              alt={slide.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <Slider {...settings}>
        {slides.map((slide) => (
          <div className="">
            <img src={slide.img} className="slide" />
          </div>
        ))}
      </Slider> */}
    </Fragment>
  );
};
export default Slider;
