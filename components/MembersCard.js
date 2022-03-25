import React from "react";

const MembersCard = ({ name, position, school, img, className }) => {
  return (
    <card className={`member-card board ${className ? className : ""}`}>
      <div className="top-section">
        <img src={img} alt={name} className="member-img" />
      </div>
      <img
        src="/images/Waves.svg"
        alt="waves bottom"
        className="waves"
        style={{ userSelect: "none" }}
      />
      <div className="body">
        <h4 className="bold">{name}</h4>
        <p>{position}</p>
        <small>{school}</small>
      </div>
      <div className="tail gap-h-dot5">
        <a href="#">
          <img
            src="/images/icons/Facebook.webp"
            className="social-link"
            alt={`Facebook Profile Link of ${name}`}
          />
        </a>
        <a href="#">
          <img
            src="/images/icons/Instagram.webp"
            className="social-link"
            alt={`Instagram Profile Link of ${name}`}
          />
        </a>
        <a href="#">
          <img
            src="/images/icons/Linkedin.svg"
            className="social-link"
            alt={`Linkedin Profile Link of ${name}`}
          />
        </a>
      </div>
    </card>
  );
};

MembersCard.defaultProps = {
  name: "Youssef Nasser",
  position: "Chairman",
  school: "Faculty Of Engineering",
};

export default MembersCard;
