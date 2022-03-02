import React from "react";

export default function SpaceSummitInfoCard({ img, title, paragraph }) {
  return (
    <div className="col py-3 d-flex justify-content-around">
      <div className="SpaceSummitInfoCard">
        <svg className="svg">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.141,0 H0.859 a0.141,0.131,0,0,1,0.141,0.131 V0.664 S0.827,0.981,0.519,0.999 S0,0.803,0,0.803 V0.131 A0.141,0.131,0,0,1,0.141,0"></path>
          </clipPath>
        </svg>
        <div className="infoCard">
          <div className="clipped-img">
            <img className="secondary-img" src="/images/icons/speaker.svg" />
            <img className=" w-100 h-100" src={img} />
          </div>
          <div className="body">
            <h5 className="bold">{title}</h5>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SpaceSummitInfoCard.defaultProps = {
  img: "/images/spaceSummitInfoCard/stars-background.svg",
  title: `Talks`,
  paragraph: ` Every Year, The Egyptian Space Summit invites talented speakers from
  the industry to discuss the new issues and updates`,
};
