import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "./Loading";
import { Alert } from "react-bootstrap";
import validator from "validator";

const VerficationForm = ({
  match: {
    params: { id },
  },
}) => {
  const [atendee, setAtendee] = useState({});
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(async () => {
    try {
      const res = await axios.get(`/api/spaceSummit/${id}`);
      if (res.data.msg) {
        setAtendee("error");
      } else {
        setAtendee(res.data);
      }
      setLoading(false);
      console.log(atendee.verified);
    } catch (err) {
      console.log(err);
      setAtendee("error");
    }
  }, []);

  const onSubmit = async () => {
    if (!name || !email || !phone) {
      setAlerts([...alerts, "Please fill all the fields"]);
      setTimeout(() => {
        setAlerts([]);
      }, 3000);
    } else if (!validator.isEmail(email)) {
      console.log(validator.isEmail(email), email);
      setAlerts([...alerts, "Please enter a valid email"]);
      setTimeout(() => {
        setAlerts([]);
      }, 3000);
    } else {
      try {
        const res = await axios.post(`/api/spaceSummit/${id}`, {
          atendee: { name, email, phone },
        });
        setDone("You have confirmed your attendance succesfully!");
      } catch (err) {
        setDone("Please try again");
        setTimeout(() => {
          setDone("");
        }, 3000);
        console.log(err);
      }
    }
  };

  return (
    <div
      style={{ maxWidth: "65.125rem", margin: "auto", minHeight: "93vh" }}
      className="px-5"
    >
      {atendee === "error" ? (
        <div className="space-form">
          <h2>This form doesn't exist</h2>
        </div>
      ) : !atendee.verified ? (
        <>
          {loading ? (
            <LoadingComponent />
          ) : (
            <>
              <img
                className="form-img"
                src="https://scontent.faly2-1.fna.fbcdn.net/v/t1.6435-9/s960x960/234324959_1854600968052061_6197416200754978141_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=340051&_nc_ohc=Y-3YE7X-DtMAX-OKmOs&_nc_ht=scontent.faly2-1.fna&oh=03e5118a61b4e9032f0e93443cd64a2c&oe=614DBA3F"
              />
              <div className="space-form-verfication">
                <div className="" style={{ maxWidth: "90%", margin: "auto" }}>
                  {done === "" ? (
                    <>
                      {alerts.map((alert, index) => (
                        <Alert key={index} variant="danger">
                          {alert}
                        </Alert>
                      ))}
                      <div className="text-center">
                        <h5>Hello, {atendee.name}</h5>
                        <p className="mt-2">
                          We are excited to see you on the event, Please fill
                          the below form to confirm your physical attendance at
                          Nile University campus on Tuesday 2nd of September.{" "}
                        </p>
                      </div>

                      <div className="mt-3 space-even">
                        <div className="form-input">
                          <label>Name:</label>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-input">
                          <label>Phone:</label>
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-input">
                          <label>Email:</label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button onClick={onSubmit} className="btn-subscribe">
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <h3>{done}</h3>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="space-form">
          <h2>You have already completed the form</h2>
        </div>
      )}
    </div>
  );
};

export default VerficationForm;
