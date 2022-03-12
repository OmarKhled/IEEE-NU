import React, { useState } from "react";

const Newcomer = ({ setOuterStage, setOuterData, outerData, initStage }) => {
  const [stage, setStage] = useState(initStage);
  const incrementStage = (isNewComer) => {
    if (stage < 2) {
      if (isNewComer) {
        setOuterData({ ...outerData, newComer: true });
      } else {
        setOuterData({ ...outerData, newComer: false });
      }
      setStage(stage + 1);
    } else {
      setOuterStage(2);
    }
  };
  const decrementStage = () => {
    setStage(stage - 1);
  };
  return (
    <>
      {stage === 1 ? (
        <FirstStage incrementStage={incrementStage} />
      ) : (
        <SecondStage
          incrementStage={incrementStage}
          decrementStage={decrementStage}
          newComer={outerData.newComer}
        />
      )}
    </>
  );
};

const FirstStage = ({ incrementStage }) => {
  return (
    <>
      <h2 className="head">Are you a newcomer?</h2>
      <div className="d-flex align-items-center justify-content-center gap-auto mt-3">
        <button
          className="button button-primary"
          onClick={() => incrementStage(true)}
        >
          Yes
        </button>
        <button
          className="button button-primary"
          onClick={() => incrementStage(false)}
        >
          No
        </button>
      </div>
    </>
  );
};

const SecondStage = ({ incrementStage, newComer, decrementStage }) => {
  return (
    <>
      {newComer ? (
        <div>
          <h3 className="mb-3 head">
            Welcome to NU, We are glad you are here!
          </h3>
          <h5 style={{ textAlign: "justify" }}>
            Since you are new, we would like to introduce our Club - IEEENU
            Student branch - We aim to engage and empower the NU community
            through technology. The main Goal of IEEENU is to offer activities
            that are relevant to electronics and electrical engineering{" "}
          </h5>
          <h5 className="mt-4">
            These days, We are recruiting new members so if you would like to
            join us, I think I will be able to help you in this.
          </h5>
          <div className="d-flex align-items-center justify-content-between gap-auto mt-3">
            <button
              className="button button-primary"
              onClick={() => decrementStage()}
            >
              Back
            </button>
            <button
              className="button button-primary"
              onClick={() => incrementStage()}
            >
              I want to join IEEENU
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="head">Hey, We are glad to see you!</h3>
          <h5 className="mt-2">
            These days, We are recruiting new members so if you would like to
            join us, I think I will be able to help you in this.
          </h5>
          <div className="d-flex align-items-center justify-content-between gap-auto mt-3">
            <button
              className="button button-primary"
              onClick={() => decrementStage()}
            >
              Back
            </button>
            <button
              className="button button-primary"
              onClick={() => incrementStage()}
            >
              I want to join IEEENU
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Newcomer;
