import React from "react";

export default function InfoCard({
  mainImg,
  secondaryImg,
  title,
  firstNumber,
  firstNumberTitle,
  secondNumber,
  secondNumberTitle,
  paragraph,
}) {
  return (
    <div className="thingsWeDo-card">
      <div className="top-image">
        <img className="thingsWeDo-mainimg" src={mainImg} />
        <div className="body">
          <img
            width="144px"
            height="144px"
            className="thingsWeDo-secondaryimg"
            src={secondaryImg}
          />
          <h4 className="bold">{title}</h4>
          <div className="numbers-container">
            <div>
              <h5 className="bold">{firstNumber}</h5>
              <h6 className="bold">{firstNumberTitle}</h6>
            </div>
            <div>
              <h5 className="bold">{secondNumber}</h5>
              <h6 className="bold">{secondNumberTitle}</h6>
            </div>
          </div>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
