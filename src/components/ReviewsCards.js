import React, {Component} from 'react'
import Slider from "react-slick";
import ReviewsCard from "./ReviewsCard";

const Reviews = [
  {
    image: require("../static/images/img/joe.jpg"),
    name: "Heba",
    review: "Joe Henderson Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon."
  },
  {
    image: require("../static/images/img/joe.jpg"),
    name: "Habhob",
    review: "Joe Henderson Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon."
  },
  {
    image: require("../static/images/img/joe.jpg"),
    name: "Hobhob",
    review: "Joe Henderson Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon."
  },
  {
    image: require("../static/images/img/download.png"),
    name: "Batman",
    review: "Joe Henderson Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon."
  }
]
const settings = {
  dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };

const ReviewsCards = (props) => (
  <>
    <div>
        <h2 className="mt-5">Reviews </h2>
        <hr></hr>
        <Slider {...settings}>
          {Reviews.map(review => 
            <div className="px-4">
              <ReviewsCard review={review}/>
            </div>
        )}
        </Slider>
      </div>
  </>)


export default ReviewsCards
