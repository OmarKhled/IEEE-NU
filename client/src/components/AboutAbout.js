import React from "react";
import { Col, Row } from "reactstrap";

import logo from "../static/images/IEEE-NU-Logo.png";

const AboutAbout = (props) => (
  <>
    <div className="my-4">
      <h2 className="my-3">About Us</h2>
      <hr></hr>
      <Row>
        <Col xs="12" sm={{ size: 6, order: 2 }} className="my-2">
          <img className=" w-100" src={logo} alt="logo" />
        </Col>
        <Col xs="12" sm={{ size: 6, order: 1 }} className="my-2">
          <div>
            IEEE-NU: is the IEEE student branch in Nile University that aims to
            engage and empower the NU community through technology to develop
            their students. The main Goal of IEEE-NU is to offer activities that
            are relevant to electronics and electrical engineering such as
            workshops - competitions - hands-on - projects - Boot-Camps. <br />
            It’s extraordinary this year that the new volunteers’ experience is
            not in the selection criteria, but rather the passion and will to
            develop. The central theme of the season will be the preparation for
            the market.
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default AboutAbout;
