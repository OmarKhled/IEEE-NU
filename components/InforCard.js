import React from "react";

export default function InfoCard({
  mainImg,
  avatar,
  title,
  firstCounter,
  secondCounter,
  children,
  noCounter,
}) {
  return (
    <div className="info-card">
      <div className="top-image">
        <img className="mainimg" src={mainImg} alt={title} />
        <div className={`body ${noCounter ? "tall" : ""}`}>
          <img
            width="144px"
            height="144px"
            className="avatar"
            alt="title"
            src={avatar}
          />
          <h4 className="bold">{title}</h4>
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
};
