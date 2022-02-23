import React from "react";
import ThingsWeDoCard from "../components/ThingsWeDoCard";

export default function about() {
  return (
    <div>
      <ThingsWeDoCard
        mainImg="/images/thingsWeDo/Background.svg"
        secondaryImg="/images/thingsWeDo/Brainstorming-amico.svg"
        title="Events"
        firstNumber="1200"
        firstNumberTitle="Attendees"
        secondNumber="15"
        secondNumberTitle="Event"
        paragraph="We are good at making events. Egyptian space summit, one of the stunning events in the space era is powered by IEEENU. "
      />
    </div>
  );
}
