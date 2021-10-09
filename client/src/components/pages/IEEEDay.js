import React, { useEffect } from "react";

const IEEEDay = () => {
  const fields = {
    name: {
      type: "text",
      name: "name",
      placeholder: "Name",
      label: "Name",
      value: "",
      required: true,
    },
    age: {
      type: "number",
      name: "age",
      placeholder: "Age",
      label: "Age",
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
    faculty: {
      type: "text",
      name: "school",
      placeholder: "School",
      label: "School",
      value: "",
      required: true,
    },
    schoold: {
      type: "select",
      name: "School",
      label: "School",
      options: ["ITCS", "EAS", "Business", "Biotechnology"],
      required: "true",
    },
    id: {
      type: "text",
      name: "NuId",
      placeholder: "NU ID",
      label: "NU ID",
      value: "",
      required: false,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      var form = document.querySelector(".pageclip-form");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log(response.status, response.data);
          if (err) throw err;
        },
        successTemplate:
          "<div style='background-color: #1a88b940; width: 100%; height: 100%; color: #333; display: flex; align-items: center; justify-content: center;'><h5>Thanks for your interest!</h5></div>",
      });
    }, 1000);
  }, []);

  return (
    <div className="px-5" style={{ minHeight: "90vh", margin: "auto" }}>
      <div className="showcase mt-3 m-auto" style={{ maxWidth: "50rem" }}>
        <form
          action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/IEEE-Day"
          method="post"
          className="mt-3 pageclip-form"
        >
          <h3 className="mb-3">IEEE Day</h3>
          {Object.keys(fields).map((key) => (
            <div className="mb-3">
              <h5 className="ms-2">
                {fields[key].label}
                {" : "}
                {fields[key].required && (
                  <span style={{ color: "red" }}>*</span>
                )}
              </h5>
              {fields[key].type === "select" ? (
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
              ) : (
                <input
                  required={fields[key].required}
                  className="i-input mt-2"
                  type={fields[key].type}
                  name={fields[key].name}
                  placeholder={fields[key].placeholder}
                />
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

export default IEEEDay;
