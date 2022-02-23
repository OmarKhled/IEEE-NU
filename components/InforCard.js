import React from "react";

export default function ThingsWeDoCard({
  mainImg,
  avatar,
  title,
  firstCounter,
  secondCounter,
  children,
}) {
  return (
    <div className="info-card">
      <div className="top-image">
        <img className="mainimg" src={mainImg} />
        <div className="body">
          <img
            width="144px"
            height="144px"
            className="secondaryimg"
            src={avatar}
          />
          <h4 className="bold">{title}</h4>
          <div className="counters-container">
            <div>
              <h5 className="bold">{firstCounter.value}</h5>
              <p className="bold title">{firstCounter.title}</p>
            </div>
            <div>
              <h5 className="bold">{secondCounter.value}</h5>
              <p className="bold title">{secondCounter.title}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
