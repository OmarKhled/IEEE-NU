import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel1 from '../static/images/CarouselPhotos/1.jpg'
import Carousel2 from '../static/images/CarouselPhotos/2.jpg'
import Carousel3 from '../static/images/CarouselPhotos/3.jpg'

const slides = [
  {
      img: Carousel1,
      name: 'Camping day'
  },
  {
      img: Carousel2,
  },
  {
      img: Carousel3,
  }
]

const Slider = () => {
    return (
      <Fragment>
        <h2 >Featured</h2>
        <hr />
        <Carousel>
          {slides.map((slide, index)=> (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 slide"
                src={slide.img}
                alt={slide.name}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        
      </Fragment>
  );
  }
export default Slider
