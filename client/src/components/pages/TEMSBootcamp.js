import React, { useEffect } from "react";

const TEMSBootcamp = () => {
  const fields = {
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
    age: {
      type: "number",
      name: "age",
      placeholder: "Age",
      label: "Age",
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
      type: "select",
      name: "faculty",
      placeholder: "Faculty",
      label: "Faculty",
      options: [
        "Buisness Adminstration",
        "Computer Science",
        "Engineering and Applied Science",
        "Biotechnology",
      ],
      required: true,
    },
    major: {
      type: "text",
      name: "major",
      placeholder: "Major",
      label: "Major",
      value: "",
      required: true,
    },
    interest: {
      type: "textarea",
      name: "Why intersted?",
      placeholder: "Why you're interested to join the bootcamp?",
      label: "Why you're interested to join the bootcamp?",
      required: true,
    },
    idea: {
      type: "textarea",
      name: "idea",
      placeholder:
        "Do you have an idea that you'd like to develop or are looking to learn how to develop one?",
      label:
        "Do you have an idea that you'd like to develop or are looking to learn how to develop one?",
      required: true,
    },
    food: {
      type: "text",
      name: "allergies",
      placeholder:
        "Any allergies with any type of food (this will be put in consideration for your meals)",
      label:
        "Any allergies with any type of food (this will be put in consideration for your meals)",
      value: "",
      required: true,
    },
    commitment: {
      type: "select",
      name: "Commitment",
      label: "Will you commit to the whole period of the bootcamp?",
      options: [
        "I will",
        "Maybe",
        "No I'm only intereates in specific sessions",
      ],
      required: true,
    },
    sessionInterest: {
      type: "select",
      name: "sessionInterests",
      label: "Which session you're interested more about?",
      options: [
        "Entrepreneurship",
        "Idea Generation & Validation",
        "Market Research and Analysis",
        "Business Model",
        "Pitching: technical presentation skills on PowerPoint, Canva, and more",
      ],
      required: true,
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
      });
    }, 1000);
  }, []);

  return (
    <div className="px-5" style={{ minHeight: "90vh", margin: "auto" }}>
      <div className="showcase mt-3 m-auto" style={{ maxWidth: "50rem" }}>
        <form
          action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/Entrepreneurship-Bootcamp"
          method="post"
          className="mt-2 pageclip-form"
        >
          <h5 className="mb-4">Entrepreneurship Bootcamp</h5>
          {Object.keys(fields).map((key) => (
            <div className="mb-3">
              <h5 className="ms-2">
                {/* {fields[key].type !== "range" && ( */}
                <>
                  {fields[key].label}
                  {" : "}
                  {fields[key].required && (
                    <span style={{ color: "red" }}>*</span>
                  )}
                </>
                {/* )} */}
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
              ) : fields[key].type === "textarea" ? (
                <textarea
                  className="mt-2"
                  style={{
                    width: "100%",
                    borderRadius: "7px",
                    borderColor: "#a8a8a8",
                    padding: "15px",
                  }}
                  required={fields[key].required}
                  type={fields[key].type}
                  name={fields[key].name}
                  placeholder={fields[key].placeholder}
                />
              ) : fields[key].type === "range" ? (
                <div className="d-flex">
                  <input
                    type="range"
                    required={fields[key].required}
                    className="i-input mt-2"
                    name={fields[key].name}
                    placeholder={fields[key].placeholder}
                    min={fields[key].min}
                    defaultValue="1"
                    max={fields[key].max}
                    step="1"
                    onChange={(e) =>
                      (document.querySelector(
                        `#${fields[key].name}`
                      ).innerHTML = e.target.value)
                    }
                  />
                  <span id={fields[key].name}>1</span>
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
          <div className="d-flex justify-content-between mt-3">
            <button className="btn-subscribe">Previous</button>
            <input type="submit" className="btn-subscribe" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TEMSBootcamp;
