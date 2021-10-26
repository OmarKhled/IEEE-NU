import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../../Loading";
import _ from "lodash";
import axios from "axios";
import { Alert, Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
const Applicant = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();

  const [applicant, setApplicant] = useState({ data: {} });
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState([]);

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const deleteApplicant = async (id) => {
    const res = await axios.delete(`/api/recruitment/${id}`, config);
    if (res.status === 200) {
      console.log("deleted");
      setAlerts([...alerts, { msg: "Deleted Successfully", color: "success" }]);
      setTimeout(() => {
        history.goBack();
      }, [500]);
    } else {
      console.log(res.data.msg);
    }
  };

  useEffect(async () => {
    try {
      const config = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };
      const res = await axios.get(`/api/recruitment/${id}`, config);
      if (res.data.applicant) {
        setApplicant(res.data.applicant);
        setLoading(false);
      } else {
        setAlerts([{ msg: "Applicant not found" }]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setAlerts([{ msg: err.msg }]);
    }
  }, []);

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div>
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <Alert variant={`${alert.color ? alert.color : "danger"}`}>
                  {alert.msg}
                </Alert>
              ))
            ) : (
              <>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <p>
                    Ref num: <small>{applicant._id}</small>
                  </p>
                  <div className="d-flex gap-2 align-items-center">
                    <Button
                      onClick={() => deleteApplicant(applicant._id)}
                      variant="danger"
                    >
                      <FaTrashAlt />
                    </Button>
                    {/* <p>Delete Applicant</p> */}
                  </div>
                </div>
                {Object.keys(applicant.data).map((key, index) => (
                  <div key={index} className="mb-3">
                    {typeof applicant.data[key] === "boolean" ? (
                      <>
                        <h5>{_.startCase(_.camelCase(key))} </h5>
                        <p>{applicant.data[key] ? "Yes" : "No"}</p>
                      </>
                    ) : typeof applicant.data[key].value === "string" ||
                      typeof applicant.data[key].value === "boolean" ? (
                      String(applicant.data[key].value).length > 0 && (
                        <>
                          <h5>{applicant.data[key].label} </h5>
                          <p>
                            {typeof applicant.data[key].value === "boolean"
                              ? applicant.data[key].value
                                ? "Yes"
                                : "No"
                              : applicant.data[key].value}
                          </p>
                        </>
                      )
                    ) : (
                      Array.isArray(applicant.data[key].value) && (
                        <>
                          {applicant.data[key].value.length > 0 && (
                            <>
                              <h5>{applicant.data[key].label}</h5>
                              <ul className="mt-2">
                                {applicant.data[key].value.map((value) => (
                                  <li>{value}</li>
                                ))}
                                {/* {JSON.stringify(applicant.data[key].value)} */}
                              </ul>
                            </>
                          )}
                        </>
                      )
                    )}
                  </div>
                ))}{" "}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Applicant;
