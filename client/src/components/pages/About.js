import React, { Fragment, useEffect } from "react";
import AboutAbout from "../AboutAbout";
import ReviewsCards from "../ReviewsCards";
import Slogan from "../Slogan";
import { Row, Col, Alert } from "reactstrap";
import LoadingComponent from "./../Loading";
import PopoverCard from "../PopoverCard";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../../redux/members/membersActions";
// import Members from "../../trash/Members";

const About = ({ full }) => {
  const dispatch = useDispatch();
  useSelector((state) => state);
  const { members, loading, alerts } = useSelector((state) => state.members);
  useEffect(async () => {
    dispatch(getMembers());
  }, []);

  return (
    <>
      {alerts.length > 0 &&
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)}
      {loading ? (
        <LoadingComponent />
      ) : (
        <Fragment>
          <Slogan />
          <div
            className="px-5"
            style={{ maxWidth: "65.125rem", minHeight: "40vh", margin: "auto" }}
          >
            <AboutAbout />
            <ReviewsCards />
            <div className="mt-5">
              <h2>Officers</h2>
              <hr />
              <Row>
                {members.map((member, index) =>
                  full ? (
                    <PopoverCard key={index} {...member} />
                  ) : (
                    <PopoverCard key={index} {...member} />
                  )
                )}
              </Row>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default About;
