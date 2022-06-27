import React from "react";

export default function InfoCard({
  mainImg,
  avatar,
  title,
  firstCounter,
  secondCounter,
  children,
  noCounter,
  noPadding,
  starsOverlay,
  secondaryTitle,
  round,
}) {
  return (
    <div className="info-card">
      <div className="top-image">
        <div className="mianimg-container">
          <img className="mainimg" src={mainImg} alt={title} />
          {starsOverlay && (
            <img
              className="starsOverlay"
              src={"/images/spacesummit/card-stars.svg"}
              alt="stars"
            />
          )}
        </div>
        <div className={`body ${noCounter ? "tall" : ""}`}>
          <div className={`avatar ${noPadding ? "p-0" : ""}`}>
            <img
              width="144px"
              className={`${round ? "round" : ""}`}
              height="144px"
              alt="title"
              src={avatar}
            />
          </div>
          <h5 className="bold">{title}</h5>
          <h6>{secondaryTitle}</h6>
          {!noCounter ? (
            <div className="counters-container">
              <div>
                <h5 className="bold">{firstCounter.value}</h5>
                <small className="bold title">{firstCounter.title}</small>
              </div>
              <div>
                <h5 className="bold">{secondCounter.value}</h5>
                <small className="bold title">{secondCounter.title}</small>
              </div>
            </div>
          ) : (
            <></>
          )}

          <p className="description">{children}</p>
        </div>
      </div>
    </div>
  );
}

InfoCard.defaultProps = {
  mainImg: "/images/Conference.png",
  avatar: "/images/icons/speaker.svg",
  title: "Events",
  firstCounter: { title: "Atendees", value: "100" },
  secondCounter: { title: "Events", value: "15" },
  children: `We are good at making events.
        Egyptian space summit
    , one of the stunning events in the space era is powered by
    IEEENU.`,
  noPadding: false,
  starsOverlay: false,
  secondaryTitle: "",
  round: false,
};
