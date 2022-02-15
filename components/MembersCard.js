import React from "react";

const MembersCard = ({ name, position, school }) => {
  return (
    <card className="member-card board">
      <div className="top-section">
        <img src="#" />
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
