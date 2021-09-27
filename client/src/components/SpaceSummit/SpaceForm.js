import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import AtendeeForm from "./AtendeeForm";
import validator from "validator";
import axios from "axios";
import LoadingComponent from "../Loading";

const SpaceForm = () => {
  const [alerts, setAlerts] = useState([]);
  const [done, setDone] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(true);

  const [values, setValues] = useState({
    // Ateendee
    name: "",
    age: "",
    email: "",
    phone: "",
    ateendeeUniversty: "",
    facebook: "",
    government: "",
    comments: "",
  });

  window.onbeforeunload = () => {
    for (let key in values) {
      if (values[key] !== "") {
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
  // eslint-disable-next-line
  useEffect(async () => {
    try {
      const res = await axios.get("/api/atendees/length");
      console.log(length);
      setLength(res.data.length);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (input) => (e) => {
    if (e.target.type === "checkbox") {
      setValues({
        ...values,
        [input]: e.target.checked ? "confirm" : "",
      });
    } else if (input === "email") {
      setValues({
        ...values,
        [input]: e.target.value.replace(/\s/g, ""),
      });
    } else {
      setValues({
        ...values,
        [input]: e.target.value,
      });
    }
  };

  const onSubmit = async () => {
    setAlerts([]);
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
    } else if (!validator.isEmail(values.email)) {
      setAlerts([
        ...alerts,
        {
          msg: "Please Enter a valid Email",
          color: "danger",
        },
      ]);
      return;
    }
    try {
      const res = await axios.post("/api/atendees", {
        atendee: values,
        options: { secondShot: true },
      });
      if (res.data.msg === "success") {
        setDone(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-form mt-3">
      {!loading ? (
        length < 245 ? (
          !error ? (
            !done ? (
              <>
                <div className="text-center">
                  <h2>Atendee information</h2>
                </div>
                {alerts.length > 0 &&
                  alerts.map((alert) => (
                    <div key={alert.msg} className="form-input">
                      <Alert color={alert.color}> {alert.msg} </Alert>
                    </div>
                  ))}
                <AtendeeForm
                  values={values}
                  onChange={onChange}
                  onSubmit={onSubmit}
                />
              </>
            ) : (
              <div className="text-center">
                <p>
                  Thanks for applying in the Egyptian Space Summit, Your
                  resspond has been recorded.
                </p>
              </div>
            )
          ) : (
            <div className="text-center">
              <p>Error has occured, Please refresh the page and try again.</p>
            </div>
          )
        ) : (
          <div className="text-center">
            <p>All seats have been reserved.</p>
          </div>
        )
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default withRouter(SpaceForm);
