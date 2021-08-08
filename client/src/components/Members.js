import React, { Fragment } from "react";
import Member from "./Member";
import { Row, Col } from "reactstrap";
import mustafa from "../static/images/Members/Mohamed.png";
import marwa from "../static/images/Members/marwa.png";
import kandy from "../static/images/Members/kandy.png";
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
    image: kandy,
    name: "Youssef kandy",
    committee: "Board",
    faculty: "Engineering",
  },
];
const Members = () => {
  return (
    <Fragment>
      <div className="mt-3">
        <h2>Board</h2>
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
