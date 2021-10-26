import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../../../Loading";
import _ from "lodash";
import Pagination from "../../../Pagination";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

const ApplicantsData = () => {
  const [applicants, setApplicants] = useState([]);
  const [visualizedApplicants, setVisualizedApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const config = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const csvData = {
    data: visualizedApplicants.map((applicant) => {
      const returned = {};
      for (const key in applicant.data) {
        const field = applicant.data[key];
        if (typeof applicant.data[key] === "boolean") {
          returned[_.startCase(_.camelCase(key))] = _.startCase(
            _.camelCase(field)
          );
        } else {
          returned[field.label] = field.value;
        }
      }
      returned.id = applicant._id;
      return returned;
    }),
    filename: "Applicants.csv",
  };

  const deleteApplicant = async (id) => {
    const res = await axios.delete(`/api/recruitment/${id}`, config);
    if (res.status === 200) {
      setApplicants(applicants.filter((applicant) => applicant._id !== id));
      console.log("deleted");
    } else {
      console.log(res.data.msg);
    }
  };

  useEffect(async () => {
    try {
      const res = await axios.get("/api/recruitment", config);
      setApplicants(res.data.applicants.reverse());
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setVisualizedApplicants(applicants);
    // console.log(applicants);
  }, [applicants]);

  const fields = [
    "name",
    "email",
    "phone",
    "universty",
    "faculty",
    "committee",
  ];

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
            <h6>You have {applicants.length} applicants in Total</h6>
          </div>
          <div className="d-flex mb-3 justify-content-start">
            <CSVLink {...csvData}>Download Data</CSVLink>
          </div>
          <div className="table applicants-table">
            <table>
              <thead>
                <th>New</th>
                {fields.map((field) => (
                  <th>{_.capitalize(field)}</th>
                ))}
                <th>Delete</th>
              </thead>
              <tbody>
                {visualizedApplicants
                  .slice(currentPage * 20, currentPage * 20 + 20)
                  .map((applicant) => (
                    <tr>
                      <td>
                        <p>{applicant.data["newComer"] ? "Yes" : "No"}</p>
                      </td>
                      {fields.map((field) => (
                        <td className="cell">
                          <Link
                            style={{
                              color: "#333",
                              textDecoration: "none !important",
                            }}
                            to={`/admin/recruitment/applicants/${applicant._id}`}
                          >
                            {applicant.data[field].value
                              ? applicant.data[field].value
                              : "None"}
                          </Link>
                        </td>
                      ))}
                      <td>
                        <span
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => deleteApplicant(applicant._id)}
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <Pagination
            key={Math.ceil(visualizedApplicants.length / 20)}
            {...{ currentPage, setCurrentPage }}
            length={Math.ceil(visualizedApplicants.length / 20)}
          />
        </>
      )}
    </div>
  );
};

export default ApplicantsData;
