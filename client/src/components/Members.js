import React, { Fragment } from "react";
import Member from "./Member";
import { Row, Col } from "reactstrap";

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
