import React from "react";
import InfoCard from "../components/InforCard";

export default function about() {
  return (
    <div>
      <InfoCard
        mainImg="/images/thingsWeDo/Background.svg"
        avatar="/images/thingsWeDo/Brainstorming-amico.svg"
        title="Events"
        firstCounter={{ title: "Attendees", value: "1200" }}
        secondCounter={{ title: "Events", value: "15" }}
      >
        <p>
          We are good at making events.
          <a className="link blue">
            <em> Egyptian Space Summit</em>
          </a>
          , one of the stunning events in the space era is powered by IEEENU.
        </p>
      </InfoCard>
    </div>
  );
}
