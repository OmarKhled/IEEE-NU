import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../../Loading";
import _ from "lodash";
import Pagination from "../../Pagination";
import { Form } from "semantic-ui-react";

const SpaceSummitAtendees = () => {
  const [atendees, setAtendees] = useState([]);
  const [visualizedAtendees, setVisualizedAtendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [verified, setVerified] = useState(false);

  useEffect(async () => {
    try {
      const config = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };
      const res = await axios.get("/api/atendees", config);
      setAtendees(res.data.atendees);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setVisualizedAtendees(atendees);
  }, [atendees]);

  useEffect(() => {
    if (verified) {
      setVisualizedAtendees(
        Array.from(atendees.slice()).filter((atendee) => atendee.verified)
      );
    } else {
      setVisualizedAtendees(atendees);
    }
  }, [verified]);

  const fields = ["name", "email", "phone", "verified"];

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="my-3 d-flex justify-content-between align-items-center">
            <h4>
              You have {atendees.length} atendees in Total -{" "}
              {
                Array.from(atendees.slice()).filter(
                  (atendee) => atendee.verified
                ).length
              }{" "}
              verified
            </h4>
            <label className="d-flex align-items-center gap-2">
              Verified only ?
              <input
                type="checkbox"
                value={verified}
                onChange={() => setVerified(!verified)}
              />
            </label>
          </div>
          <div className="atendees-table">
            <table>
              <thead>
                {fields.map((field) => (
                  <th>{_.capitalize(field)}</th>
                ))}
              </thead>
              <tbody>
                {visualizedAtendees
                  .slice(currentPage * 20, currentPage * 20 + 20)
                  .map((atendee) => (
                    <tr>
                      {fields.map((field) => (
                        <td className="cell">
                          <p>
                            {field === "verified"
                              ? atendee[field]
                                ? "True"
                                : "False"
                              : atendee[field]}
                          </p>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <Pagination
            key={Math.ceil(visualizedAtendees.length / 20)}
            {...{ currentPage, setCurrentPage }}
            length={Math.ceil(visualizedAtendees.length / 20)}
          />
        </>
      )}
    </div>
  );
};

export default SpaceSummitAtendees;
