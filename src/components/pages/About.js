import React, { Fragment } from "react";
import AboutAbout from "../AboutAbout";
import ReviewsCards from "../ReviewsCards";
import ReviewsCard from "../ReviewsCard";
import Slogan from "../Slogan";

const About = () => {
  return (
    <Fragment>
      <Slogan />
      <div className="px-5" style={{ maxWidth: "65.125rem", minHeight: "40vh", margin: "auto" }}>
      <AboutAbout/>
      <ReviewsCard/>
      </div>
    </Fragment>
  );
};

export default About;
