import React, { useState, useEffect } from "react";

const BoardRecruitment = () => {
  const [stage, setStage] = useState(0);
  const [committie, setCommittie] = useState("Technical");

  return (
    <div className="px-5 pt-5" style={{ minHeight: "90vh", margin: "auto" }}>
      <div className="showcase m-auto" style={{ maxWidth: "50rem" }}>
        <h3>FALL21 Board Recruitment</h3>
        {stage === 0 ? (
          <div className="mt-3">
            <label>
              <input
                type="radio"
                name="comittie"
                onChange={(e) => setCommittie(e.target.value)}
                value="Technical"
                checked={committie === "Technical"}
              />
              {"  "}Technical
            </label>
            <br />
            <label className="mt-2">
              <input
                type="radio"
                name="comittie"
                onChange={(e) => setCommittie(e.target.value)}
                value="Operations"
                checked={committie === "Operations"}
              />
              {"  "}Operations
            </label>
            <br />
            <label className="mt-2">
              <input
                type="radio"
                name="comittie"
                onChange={(e) => setCommittie(e.target.value)}
                value="Media"
                checked={committie === "Media"}
              />
              {"  "}Media
            </label>
            <div className="d-flex justify-content-end">
              <button className="btn-subscribe" onClick={() => setStage(1)}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <>
            {committie === "Technical" ? (
              <Technical setStage={setStage} />
            ) : committie === "Operations" ? (
              <Operations setStage={setStage} />
            ) : (
              <Media />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Technical = ({ setStage }) => {
  useEffect(() => {
    setTimeout(() => {
      var form = document.querySelector(".pageclip-form");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log(response.status, response.data);
          if (err) throw err;
        },
        successTemplate:
          "<div style='width: 100%; height: 100%; color: #333; display: flex; align-items: center; justify-content: center;'><h5>Thanks for your interest!</h5></div>",
      });
    }, 1000);
  }, []);

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
      type: "text",
      name: "faculty",
      placeholder: "Faculty",
      label: "Faculty",
      value: "",
      required: true,
    },
    add: {
      type: "textarea",
      name: "What do you expect to add",
      placeholder: "I expect to add ...",
      label: "What do you expect to add to our community?",
      value: "",
      required: true,
    },
    extentRange: {
      type: "range",
      name: "learning extent",
      label:
        "From 1 to 10, to what extent are you willing to learn new things?",
      required: true,
      min: 1,
      max: 10,
      step: 1,
    },
    techFields: {
      type: "select",
      name: "intrFields",
      label: "Which Technical field are you interested in?",
      options: [
        "Electronics",
        "Design",
        "Programming",
        "Web development",
        "Mobile development",
        "AI",
      ],
      required: true,
    },
    experience: {
      type: "textarea",
      name: "experiences",
      placeholder: "List your experience here",
      label: "List your experience here",
      required: true,
    },
    fieldsCourses: {
      type: "select",
      name: "checkCourses",
      label: "Have you taken any courses in the above-mentioned fields?",
      options: ["Yes", "No"],
      required: true,
    },
    fieldsCoursesTaken: {
      type: "textarea",
      name: "courses",
      placeholder: "I took ...",
      label: "If yes, mention them",
      required: true,
    },
    hackathons: {
      type: "textarea",
      name: "hackathons",
      placeholder: "I took ...",
      label:
        "If you've paticipated in any competitions/hackathons before, please mention them",
      required: true,
    },
    academy: {
      type: "textarea",
      name: "puroposed academies",
      placeholder: "I am willing to make ...",
      label:
        "If there is a technical academy, will you be able to be the academy instructor?",
      required: true,
    },
    leadStyle: {
      type: "textarea",
      name: "mangment style",
      placeholder: "Elaborate ...",
      label:
        "Describe your style of management? Will you be an easy-going director, or will you take a firm approach to managing people in our community?",
      required: true,
    },
  };
  return (
    <form
      action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/Board-Technical"
      method="post"
      className="mt-2 pageclip-form"
    >
      <h5 className="mb-4">Technical head</h5>
      {Object.keys(fields).map((key) => (
        <div className="mb-3">
          <h5 className="ms-2">
            {/* {fields[key].type !== "range" && ( */}
            <>
              {fields[key].label}
              {" : "}
              {fields[key].required && <span style={{ color: "red" }}>*</span>}
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
                  (document.querySelector(`#${fields[key].name}`).innerHTML =
                    e.target.value)
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
        <button className="btn-subscribe" onClick={() => setStage(0)}>
          Previous
        </button>
        <input type="submit" className="btn-subscribe" />
      </div>
    </form>
  );
};

const Media = ({ setStage }) => {
  useEffect(() => {
    setTimeout(() => {
      var form = document.querySelector(".pageclip-form");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log(response.status, response.data);
          if (err) throw err;
        },
        successTemplate:
          "<div style='width: 100%; height: 100%; color: #333; display: flex; align-items: center; justify-content: center;'><h5>Thanks for your interest!</h5></div>",
      });
    }, 1000);
  }, []);

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
      type: "text",
      name: "faculty",
      placeholder: "Faculty",
      label: "Faculty",
      value: "",
      required: true,
    },
    add: {
      type: "textarea",
      name: "What do you expect to add",
      placeholder: "I expect to add ...",
      label: "What do you expect to add to our community?",
      value: "",
      required: true,
    },
    extentRange: {
      type: "range",
      name: "learning extent",
      label:
        "From 1 to 10, to what extent are you willing to learn new things?",
      required: true,
      min: 1,
      max: 10,
      step: 1,
    },
    experience: {
      type: "textarea",
      name: "experiences",
      placeholder: "List your experience here",
      label: "List your experience here",
      required: true,
    },
    designSoftwares: {
      type: "textarea",
      name: "design Softwares",
      placeholder: "I use ...",
      label: "List the design softwares you use",
      required: true,
    },
    brandTest: {
      type: "textarea",
      name: "brand test",
      placeholder: "Elaborate ...",
      label: "What is the difference between Brand, Logo, and Visual identity?",
      required: true,
    },
    hackathons: {
      type: "text",
      name: "cv",
      placeholder: "https://drive.google.com/....",
      label: "Upload your portfolio (Behance or drive)",
      required: true,
    },
    leadStyle: {
      type: "textarea",
      name: "mangment style",
      placeholder: "Elaborate ...",
      label:
        "Describe your style of management? Will you be an easy-going director, or will you take a firm approach to managing people in our community?",
      required: true,
    },
  };
  return (
    <form
      action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/Board-Media"
      method="post"
      className="mt-2 pageclip-form"
    >
      <h5 className="mb-4">Media head</h5>
      {Object.keys(fields).map((key) => (
        <div className="mb-3">
          <h5 className="ms-2">
            {/* {fields[key].type !== "range" && ( */}
            <>
              {fields[key].label}
              {" : "}
              {fields[key].required && <span style={{ color: "red" }}>*</span>}
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
                  (document.querySelector(`#${fields[key].name}`).innerHTML =
                    e.target.value)
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
        <button className="btn-subscribe" onClick={() => setStage(0)}>
          Previous
        </button>
        <input type="submit" className="btn-subscribe" />
      </div>
    </form>
  );
};

const Operations = ({ setStage }) => {
  useEffect(() => {
    setTimeout(() => {
      var form = document.querySelector(".pageclip-form");
      window.Pageclip.form(form, {
        onResponse: (err, response) => {
          console.log(response.status, response.data);
          if (err) throw err;
        },
        successTemplate:
          "<div style='width: 100%; height: 100%; color: #333; display: flex; align-items: center; justify-content: center;'><h5>Thanks for your interest!</h5></div>",
      });
    }, 1000);
  }, []);

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
      type: "text",
      name: "faculty",
      placeholder: "Faculty",
      label: "Faculty",
      value: "",
      required: true,
    },
    add: {
      type: "textarea",
      name: "What do you expect to add",
      placeholder: "I expect to add ...",
      label: "What do you expect to add to our community?",
      value: "",
      required: true,
    },
    extentRange: {
      type: "range",
      name: "learning extent",
      label:
        "From 1 to 10, to what extent are you willing to learn new things?",
      required: true,
      min: 1,
      max: 10,
      step: 1,
    },
    experience: {
      type: "textarea",
      name: "experiences",
      placeholder: "Experience...",
      label: "List your experiences here",
      value: "",
      required: true,
    },
    projEx: {
      type: "textarea",
      name: "project experiences",
      placeholder: "I Worked on ...",
      label:
        "What is one example of a project you oversaw that involved multiple teams? How did you manage that situation, and what was the result?  Mention how big this team was",
      value: "",
      required: true,
    },
    budjPlan: {
      type: "textarea",
      name: "budject planning",
      placeholder: "I Worked on ...",
      label:
        "What is budget planning and how do you handle it step-by-step? Mention the most challenging part of budgeting for you",
      value: "",
      required: true,
    },
    manjStyle: {
      type: "textarea",
      name: "mangment style",
      placeholder: "I will be ...",
      label:
        "What is budget planning and how do you handle it step-by-step? Mention the most challenging part of budgeting for you",
      value: "",
      required: true,
    },
    idea: {
      type: "textarea",
      name: "prev ideas",
      placeholder: "I made ...",
      label:
        "Highlight an instance in which one of your ideas has helped to improve operations at other places (student activities or NGO).",
      value: "",
      required: true,
    },
  };
  return (
    <form
      action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/Board-Operations"
      method="post"
      className="mt-2 pageclip-form"
    >
      <h5 className="mb-4">Operations head</h5>
      {Object.keys(fields).map((key) => (
        <div className="mb-3">
          <h5 className="ms-2">
            {/* {fields[key].type !== "range" && ( */}
            <>
              {fields[key].label}
              {" : "}
              {fields[key].required && <span style={{ color: "red" }}>*</span>}
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
                  (document.querySelector(`#${fields[key].name}`).innerHTML =
                    e.target.value)
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
        <button className="btn-subscribe" onClick={() => setStage(0)}>
          Previous
        </button>
        <input type="submit" className="btn-subscribe" />
      </div>
    </form>
  );
};

export default BoardRecruitment;
