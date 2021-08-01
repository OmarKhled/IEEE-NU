import React, { useState, useEffect } from "react";

import UserType from "./UserType";
import AtendeeForm from "./AtendeeForm";
import ParticipantForm from "./ParticipantForm";
import Confirmation from "./Confirmation";
import Success from "./Success";

const SpaceForm = () => {
  const [stage, setStage] = useState(1);

  const [values, setValues] = useState({
    type: "atendee",
    teamName: "",
    universty: "",
    leaderName: "",
    leaderPhoneNumber: "",
    teamMembersCount: "",
    secondMember: "",
    thirdMember: "",
    fourthMember: "",
    fifthMember: "",
    track: "",
    hackathonBefore: "",
    hackathons: "",
    solution: "",
    motivation: "",
    comments: "",
    confirmation: "",

    // Ateendee

    name: "",
    age: "",
    email: "",
    phone: "",
    ateendeeUniversty: "",
    facebook: "",
    government: "",
  });

  window.onbeforeunload = () => {
    for (let key in values) {
      console.log(values[key]);
      if (values[key] !== "" && key !== "type") {
        return "Data will be lost if you leave the page, are you sure?";
      }
    }
  };

  const onChange = (input) => (e) => {
    console.log(e.target.checked);
    if (e.target.type == "checkbox") {
      setValues({
        ...values,
        [input]: e.target.checked ? "confirm" : "",
      });
    } else {
      setValues({
        ...values,
        [input]: e.target.value,
      });
    }
  };

  const nextStage = () => {
    if (stage == 2) {
      if (values.type === "atendee") {
      } else if (values.type === "participant") {
      } else {
      }
    }
    setStage(stage + 1);
  };
  const prevStage = () => {
    setStage(stage - 1);
  };

  return (
    <div>
      <div className="space-form mt-3">
        <div className="text-center">
          <h2>Book your place now!</h2>
        </div>
        {stage === 1 ? (
          <UserType values={values} onChange={onChange} nextStage={nextStage} />
        ) : stage === 2 ? (
          values.type === "atendee" ? (
            <AtendeeForm
              values={values}
              onChange={onChange}
              nextStage={nextStage}
              prevStage={prevStage}
            />
          ) : (
            <ParticipantForm
              values={values}
              onChange={onChange}
              nextStage={nextStage}
              prevStage={prevStage}
            />
          )
        ) : stage === 3 ? (
          <Confirmation
            values={values}
            onChange={onChange}
            nextStage={nextStage}
            prevStage={prevStage}
          />
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default SpaceForm;
