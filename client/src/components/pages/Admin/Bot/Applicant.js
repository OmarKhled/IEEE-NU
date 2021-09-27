import React, { useEffect, useState } from "react";
import LoadingComponent from "../../../Loading";
import _ from "lodash";
import axios from "axios";
import { Alert } from "react-bootstrap";

const Applicant = ({
  match: {
    params: { id },
  },
}) => {
  const [applicant, setApplicant] = useState({ data: {} });
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState([]);

  useEffect(async () => {
    try {
      const config = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };
      const res = await axios.get(`/api/recruitment/${id}`, config);
      setApplicant(res.data.applicant);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAlerts([err.msg]);
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
            {alerts.length > 0
              ? alerts.map((alert) => <Alert variant="danger">{alert}</Alert>)
              : Object.keys(applicant.data).map((key, index) => (
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
                ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Applicant;
