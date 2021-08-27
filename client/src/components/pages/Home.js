import React, { Fragment, useState, useEffect } from "react";
// Semantic UI
import "semantic-ui-css/semantic.min.css";
// Components
import Members from "../Members";
import Carousel from "../Carousel";
import NewsContainer from "../NewsContainer";
import PastParteners from "../PastParteners";
import NewsletterPop from "../NewsletterPop";
// CSS Stylesheet
import "../../static/css/master.scss";

import { isMobile, mobileModel } from "react-device-detect";
import EventsSection from "../EventsSection";
import { withRouter } from "react-router-dom";

const Home = ({ history }) => {
  const [reveal, setReveal] = useState("");

  // history.listen((location, action) => {
  //   console.log(location.pathname);
  // });

  if (localStorage.getItem("revealPop") !== "off") {
    window.onscroll = function (ev) {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight &&
        reveal == ""
      ) {
        setTimeout(() => {
          setReveal("reveal");
        }, 4000);
      }
    };
  }
  const remove = () => {
    setReveal("");
  };
  return (
    <div className="px-5" style={{ maxWidth: "65.125rem", margin: "auto" }}>
      <Carousel />
      <NewsContainer />
      <EventsSection />
      <Members />
      <PastParteners />
      <NewsletterPop
        className={`${reveal} ${isMobile ? "mobile" : ""}`}
        remove={remove}
      />
    </div>
  );
};

export default withRouter(Home);
