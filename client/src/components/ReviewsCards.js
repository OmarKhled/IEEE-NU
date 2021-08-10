import Slider from "react-slick";
import ReviewsCard from "./ReviewsCard";

const Reviews = [
  {
    image: require("../static/images/hassan.jpeg"),
    name: "Hassaan Ibrahim",
    review:
      "IEEE had a great role forming my personality, teaching me how to bare responsibilities and offered me some great Non-technical skills as planning events with world class companies, leadership skills and communication skills.",
  },
  {
    image: require("../static/images/img/joe.jpg"),
    name: "Mohab Hafez",
    review:
      "started my journey in student activities in IEEE as an HR member in 2018. Then I joined IEEE’s high board as a secretary. Although it was so difficult to work during the pandemic, we managed to create a competition in which we learned how to win",
  },
  {
    image: require("../static/images/img/joe.jpg"),
    name: "Member",
    review:
      "For me, IEEE is the place where I made my first friendships and developed wonderful ties with people from many disciplines. Until now, it has been the place where I have honed my skills, both technical and soft.It led to my first job and my first start-up experience",
  },
  {
    image: require("../static/images/img/joe.jpg"),
    name: "Muhammad Farouq",
    review:
      "I began in IEEE as a technical member, progressed to technical committee head, then to competition committee head, and then to the chairman. The whole journey is one of the best experiences I have had in my life. It made me what I am today.",
  },
];
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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
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
        {Reviews.map((review) => (
          <div key={review} className="px-4">
            <ReviewsCard style={{ height: "100%" }} review={review} />
          </div>
        ))}
      </Slider>
    </div>
  </>
);

export default ReviewsCards;
