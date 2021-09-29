import React, { useState, useEffect } from "react";

const Recruitment = () => {
  const [fields, setFields] = useState({
    name: {
      type: "text",
      name: "name",
      placeholder: "Name",
      label: "Name",
      value: "",
      required: true,
    },
    email: {
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email",
      value: "",
      required: true,
    },
    phone: {
      type: "text",
      name: "phone",
      placeholder: "Phone Number",
      label: "Phone Number",
      value: "",
      required: true,
    },
    universty: {
      type: "text",
      name: "universty",
      placeholder: "Universty/School",
      label: "Universty/School",
      value: "",
      required: true,
    },
    faculty: {
      type: "text",
      name: "faculty",
      placeholder: "Faculty",
      label: "Faculty",
      value: "",
      required: true,
    },
    id: {
      type: "text",
      name: "NuId",
      placeholder: "NU ID:",
      label: "NU ID:",
      value: "",
      required: false,
    },
    firstPrefrence: {
      type: "select",
      name: "firstPrefrence",
      label: "Committee First Preference",
      options: [
        "HR committee",
        "Secretary",
        "PR committee",
        "Media committee",
        "Marketing committee",
        "Technical committee",
        "Operations committee",
      ],
      value: "",
      required: true,
    },
    secondPrefrence: {
      type: "select",
      name: "secondPrefrence",
      label: "Committee Second Preference",
      options: [
        "HR committee",
        "Secretary",
        "PR committee",
        "Media committee",
        "Marketing committee",
        "Technical committee",
        "Operations committee",
      ],
      value: "",
      required: "true",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      var form = document.querySelector(".pageclip-form");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log(response.status, response.data);
          if (err) throw err;
        },
      });
    }, 1000);
  }, []);

  return (
    <div className="px-5" style={{ minHeight: "90vh", margin: "auto" }}>
      <div className="showcase mt-3 m-auto" style={{ maxWidth: "50rem" }}>
        <h3>FALL21 Recruitment</h3>
        <form
          action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/FALL21-Recruitment"
          method="post"
          className="mt-3 pageclip-form"
        >
          <div className="d-flex justify-content-center">
            <span className="success-temp"></span>
          </div>
          {Object.keys(fields).map((key) => (
            <div className="mb-3">
              <h5 className="ms-2">
                {fields[key].label}{" "}
                {fields[key].required && (
                  <span style={{ color: "red" }}>*</span>
                )}
              </h5>
              {fields[key].type === "text" || fields[key].type === "email" ? (
                <input
                  required={fields[key].required}
                  className="i-input mt-2"
                  type={fields[key].type}
                  name={fields[key].name}
                  placeholder={fields[key].placeholder}
                />
              ) : (
                <select
                  required={fields[key].required}
                  name={fields[key].name}
                  className="i-input mt-2"
                >
                  {fields[key].options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
          <div className="d-flex justify-content-center mt-3">
            <input type="submit" className="btn-subscribe" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recruitment;
