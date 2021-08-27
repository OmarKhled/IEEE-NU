import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Card } from "semantic-ui-react";
const MemberCard = ({ img, name, position, faculty, facebook, linkedin }) => {
  return (
    <div className="member-container mt-3">
      <img
        src={img}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/unset.jpg";
        }}
        alt={name}
        className="circle"
      />
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{position}</Card.Meta>
          <Card.Description>
            <div className="des">
              <div className="my-2">
                <h6>Faculty</h6>
                <span>{faculty}</span>
              </div>
              <div className="columns">
                <div className="i">
                  <a href={facebook}>
                    <FaFacebook />
                  </a>
                </div>
                <div className="i">
                  <a href={linkedin}>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default MemberCard;
