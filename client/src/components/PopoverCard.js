import React from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Col,
} from "reactstrap";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const PopoverCard = ({
  member,
}) => {
  const { name, description, facebook, twitter, linkedin, img, position } = member
  return (
    <Col className="mt-4" xs="12" sm="6" md="4" lg="4">
      <Card style={{ background: "none", border: "none" }}>
        <CardImg
          id={`UncontrolledPopover${name.split(" ")[0]}${name.split(" ")[1]}`}
          style={{
            width: "40%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="rounded-circle"
          top
          src={img}
          alt="Card image cap"
        />
        <UncontrolledPopover
          style={{ border: "none" }}
          trigger="hover"
          placement="bottom"
          target={`UncontrolledPopover${name.split(" ")[0]}${name.split(" ")[1]}`}
        >
          <div className="popoverHeader text-center">{name}</div>
          <PopoverBody>
            {description}
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href={facebook}
              >
                <FaFacebook />
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href={linkedin}
              >
                <FaLinkedin />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href={twitter}
              >
                <FaTwitter />
              </a>
            </div>
          </PopoverBody>
        </UncontrolledPopover>
        <CardBody>
          <CardTitle
            style={{ fontWeight: "bold", fontSize: "1.2em" }}
            className="text-center mb-0"
          >
            {name}
          </CardTitle>
          <CardText className="text-center" style={{ fontSize: "1.1em" }}>
            {position}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

PopoverCard.defaultProps = {
  member: {
    name: "Mohamed Mustafa",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    position: "Member",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quo accusamus ducimus quas aspernatur, mollitia, vitae labore alias, rem necessitatibus ut. Repudiandae soluta inventore optio? Totam necessitatibus ex architecto tenetur."
  }
  
};

export default PopoverCard;
