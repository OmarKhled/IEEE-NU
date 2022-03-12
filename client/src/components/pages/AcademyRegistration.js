import React, { useEffect } from "react";
import $ from "jquery";

const AcademyRegistration = () => {
  const fields = {
    name: {
      type: "text",
      name: "name",
      placeholder: "Name",
      label: "Name",
      required: true,
    },
    email: {
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    phone: {
      type: "text",
      name: "phone",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
    },
    school: {
      type: "select",
      name: "School",
      label: "School",
      options: ["ITCS", "EAS", "Business", "Biotechnology"],
      required: "true",
    },
    id: {
      type: "text",
      name: "Nu Id",
      placeholder: "NU ID",
      label: "NU ID",
      required: true,
    },
    firstPreference: {
      type: "radio",
      name: "firstPreference",
      label: "First Preference",
      required: true,
      options: ["Marketing", "Media"],
    },
    secondPreference: {
      type: "radio",
      name: "secondPreference",
      label: "Second Preference",
      required: true,
      options: ["Marketing", "Media", "None"],
    },
    suitableTime: {
      type: "checkbox",
      name: "suitableTime",
      label: "Suitable Time",
      required: true,
      options: [
        "Wednesday 4:30 PM - 6:30 PM",
        "Wednesday 6:30 PM - 8:30 PM",
        "Thrusday  4:30 PM - 6:30 PM",
        "Thrusday 6:30 PM - 8:30 PM",
      ],
    },
  };

  useEffect(() => {
    setTimeout(() => {
      var form = document.querySelector("#form");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log(response.status, response.data);
          if (err) throw err;
        },
        successTemplate:
          "<div style='background-color: #1a88b940; width: 100%; height: 100%; color: #333; display: flex; align-items: center; justify-content: center;'><h5>Thanks for your interest!</h5></div>",
      });
    }, 1000);
    $(() => {
      Object.keys(fields).map((key) => {
        if (fields[key].type === "checkbox") {
          const requiredCheckboxes = $(
            `.options-${fields[key].name} :checkbox[required]`
          );
          requiredCheckboxes.on("change", () => {
            const value = $(`#value-${fields[key].name}`);
            value.val("");
            requiredCheckboxes.toArray().forEach((option) => {
              if (option.checked) {
                value.val(
                  value.val().length > 0
                    ? `${value.val()}, ${option.value}`
                    : `${option.value}`
                );
              }
            });
            if (requiredCheckboxes.is(":checked")) {
              requiredCheckboxes.removeAttr("required");
            } else {
              requiredCheckboxes.attr("required", "required");
            }
          });
        }
      });
    });
  }, []);

  return (
    <div className="px-5" style={{ minHeight: "90vh", margin: "auto" }}>
      <div className="showcase mt-3 m-auto" style={{ maxWidth: "50rem" }}>
        <h3 className="mb-3">IEEE NU Academy</h3>
        <form
          action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/IEEE-Academy"
          method="post"
          className="mt-3"
          id="form"
        >
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
              ) : fields[key].type === "checkbox" ? (
                <div className={`px-3 pt-1 mt-2 options-${fields[key].name}`}>
                  <input
                    id={`value-${fields[key].name}`}
                    type="hidden"
                    value=""
                    name={fields[key].name}
                  />
                  {fields[key].options.map((option, index) => (
                    <label className="d-flex gap-auto align-items-center mb-2">
                      <input
                        type="checkbox"
                        // name={fields[key].name}
                        value={option}
                        required
                      />
                      <p>{option}</p>
                    </label>
                  ))}
                </div>
              ) : fields[key].type === "radio" ? (
                <div className={`px-3 pt-1 mt-2 options-${fields[key].name}`}>
                  {fields[key].options.map((option, index) => (
                    <label className="d-flex gap-auto align-items-center">
                      <input
                        type="radio"
                        name={fields[key].name}
                        value={option}
                        required
                      />
                      <p>{option}</p>
                    </label>
                  ))}
                </div>
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
        {/* <div className="d-flex justify-content-center my-3">
          <h5>This form doesn't accept responses anymore</h5>
        </div> */}
      </div>
    </div>
  );
};

export default AcademyRegistration;
