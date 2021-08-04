import React, { Fragment } from "react";
import Member from "./Member";
import { Row, Col } from "reactstrap";
import mustafa from "../static/images/Members/Mohamed.png";
import marwa from "../static/images/Members/marwa.png";
const members = [
  {
    image: mustafa,
    name: "Mohamed Mostafa",
    committee: "Board",
    faculty: "Engineering",
  },
  {
    image: marwa,
    name: "Marwa Mohamed",
    committee: "Board",
    faculty: "Computer Science",
  },
  {
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    name: "Youssef kandy",
    committee: "Board",
    faculty: "Engineering",
  },
];
const Members = () => {
  return (
    <Fragment>
      <div className="mt-3">
        <h2>Members</h2>
        <hr />
      </div>
      <div className="pb-5">
        <Row>
          {members.map((member, index) => (
            <Col key={index} xs="12" sm="6" lg="4">
              <Member member={member} />
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

export default Members;
