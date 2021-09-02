import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../../Loading";
import _ from "lodash";
import Pagination from "../../Pagination";
import { CSVLink } from "react-csv";

const SpaceSummitAtendees = () => {
  const [atendees, setAtendees] = useState([]);
  const [visualizedAtendees, setVisualizedAtendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [verified, setVerified] = useState(false);

  // "valid", "verified", "verficationName", "verficationPhone", "verficationEmail", "_id", "name", "age", "email", "phone", "comments", "facebook", "government", "ateendeeUniversty", "createdAt", "updatedAt", "__v"

  const headers = [
    { label: "Id", key: "id" },
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Universty", key: "ateendeeUniversty" },
    { label: "Valid", key: "valid" },
    { label: "Verified", key: "verified" },
    { label: "Verified Name", key: "verficationName" },
    { label: "Verified Phone", key: "verficationPhone" },
    { label: "Verified Email", key: "verficationEmail" },
  ];

  const csvData = {
    data: visualizedAtendees.map((atendee) => {
      const returned = {};
      headers.forEach((header) => {
        returned[header.key] = atendee[header.key];
      });
      returned.id = atendee._id;
      return returned;
    }),
    filename: "Atendees.csv",
    headers,
  };

  useEffect(async () => {
    try {
      const config = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };
      const res = await axios.get("/api/atendees", config);
      setAtendees(res.data.atendees.reverse());
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

  const fields = ["name", "email", "phone", "verified", "attended", "tookFood"];

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className=" d-flex justify-content-between align-items-center">
            <h4>
              You have {atendees.length} atendees in Total -{" "}
              {
                Array.from(atendees.slice()).filter(
                  (atendee) => atendee.verified
                ).length
              }{" "}
              verified -{" "}
              {
                Array.from(atendees.slice()).filter(
                  (atendee) => atendee.attended
                ).length
              }{" "}
              Attended -{" "}
              {
                Array.from(atendees.slice()).filter(
                  (atendee) => atendee.tookFood
                ).length
              }{" "}
              Took Food
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
          <div className="d-flex mb-3 justify-content-start">
            <CSVLink {...csvData}>Download Data</CSVLink>
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
                            {field === "verified" ||
                            field === "attended" ||
                            field === "tookFood"
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
