import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Card } from "semantic-ui-react";

const MemberCard = ({ member }) => {
  return (
    <div className="member-container mt-3">
      <img src={member.img} alt={member.name} className="circle" />
      <Card>
        <Card.Content>
          <Card.Header>{member.name}</Card.Header>
          <Card.Meta>{member.committee}</Card.Meta>
          <Card.Description>
            <div className="des">
              <div className="my-2">
                <h6>Faculty</h6>
                <span>{member.faculty}</span>
              </div>
              <div className="columns">
                <div className="i">
                  <a  href={member.facebook}>
                  <FaFacebook />
                  </a>
                </div>
                <div className="i">
                  <a href={member.linkedin}>
                    <FaLinkedin  />

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
