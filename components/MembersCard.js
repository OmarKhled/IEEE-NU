import React from "react";

const MembersCard = ({ name, position, school, img, className }) => {
  return (
    <card className={`member-card board ${className ? className : ""}`}>
      <div className="top-section">
        <img src={img} alt={name} className="member-img" />
      </div>
      <div className="body">
        <h3>{name}</h3>
        <p>{position}</p>
        <small>{school}</small>
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
