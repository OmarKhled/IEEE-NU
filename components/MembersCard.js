import React from "react";

const MembersCard = ({ name, position, school, img, className }) => {
  return (
    <card className={`member-card board ${className ? className : ""}`}>
      <div className="top-section">
        <img src={img} alt={name} className="member-img" />
      </div>
      <img src="/images/Waves.svg" className="waves" />
      <div className="body">
        <h4 className="bold">{name}</h4>
        <p>{position}</p>
        <small>{school}</small>
      </div>
      <div className="tail gap-h-dot5">
        <a href="#">
          <img src="/images/icons/Facebook.svg" className="social-link" />
        </a>
        <a href="#">
          <img src="/images/icons/Instagram.svg" className="social-link" />
        </a>
        <a href="#">
          <img src="/images/icons/Linkedin.svg" className="social-link" />
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
