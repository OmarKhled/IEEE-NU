import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import { withRouter } from "react-router-dom";

import UserType from "./UserType";
import AtendeeForm from "./AtendeeForm";
import ParticipantForm from "./ParticipantForm";
import Confirmation from "./Confirmation";
import Success from "./Success";

const SpaceForm = (props) => {
  const [stage, setStage] = useState(1);

  const [alerts, setAlerts] = useState([]);

  const [values, setValues] = useState({
    type: "atendee",
    teamName: "RunTiime Terror",
    universty: "Nile Universty",
    leaderName: "Omar Khaled",
    leaderPhoneNumber: "01068405513",
    teamMembersCount: "2",
    secondMember: "Hassouna",
    thirdMember: "",
    fourthMember: "",
    fifthMember: "",
    track: "Communication",
    hackathonBefore: "Yes",
    hackathons: "AUC Hackathon",
    solution: "Example",
    motivation: "...",
    comments: "...",
    confirmation: "confirm",

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

  useEffect(() => {
    if (alerts.length > 0) {
      document.getElementById("form-begin").scrollIntoView();
      setTimeout(() => {
        setAlerts([]);
      }, 3000);
    }
  }, [alerts]);

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
    setAlerts([]);
    console.log("object");
    if (stage == 2) {
      if (values.type === "atendee") {
        if (
          !values.name ||
          !values.age ||
          !values.email ||
          !values.phone ||
          !values.ateendeeUniversty ||
          !values.facebook ||
          !values.government
        ) {
          setAlerts([
            ...alerts,
            {
              msg: "Please fill all the required fields!",
              color: "danger",
            },
          ]);
          return;
        }
      } else if (values.type === "participant") {
        if (
          !values.teamName ||
          !values.universty ||
          !values.leaderName ||
          !values.leaderPhoneNumber ||
          !values.teamMembersCount ||
          !values.secondMember ||
          !values.track ||
          !values.hackathonBefore ||
          !values.solution ||
          !values.motivation ||
          !values.comments ||
          !values.confirmation
        ) {
          setAlerts([
            ...alerts,
            {
              msg: "Please fill all the required fields!",
              color: "danger",
            },
          ]);
          return;
        }
      }
    }
    setStage(stage + 1);
  };
  const prevStage = () => {
    setAlerts([]);
    setStage(stage - 1);
  };

  return (
    <div>
      <div className="space-form mt-3">
        <div className="text-center">
          <h2>
            {stage === 1
              ? "Book Your Place now!"
              : stage === 2
              ? `${values.type.capitalize()} information`
              : "Confirm submission"}
          </h2>
        </div>
        {alerts.length > 0 &&
          alerts.map((alert) => (
            <div key={alert.msg} className="form-input">
              <Alert color={alert.color}> {alert.msg} </Alert>
            </div>
          ))}
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
            setStage={setStage}
          />
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default withRouter(SpaceForm);
