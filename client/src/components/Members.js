import React, { Fragment, useEffect } from "react";
import MemberCard from "./Member";
import { Row, Col, Alert } from "reactstrap";
import LoadingComponent from "./Loading";

import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../redux/members/membersActions";

const Members = ({ full }) => {
  const dispatch = useDispatch();
  useSelector((state) => state);
  const { members, loading, alerts } = useSelector((state) => state.members);

  // eslint-disable-next-line
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
          <div className="mt-3">
            <h2>Board</h2>
            <hr />
          </div>
          <div className="pb-5">
            <Row>
              {members.map((member, index) =>
                full ? (
                  <Col key={index} xs="12" sm="6" lg="4">
                    <MemberCard {...member} />
                  </Col>
                ) : (
                  index <= 2 && (
                    <Col key={index} xs="12" sm="6" lg="4">
                      <MemberCard {...member} />
                    </Col>
                  )
                )
              )}
            </Row>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Members;
