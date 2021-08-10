import React from "react";

const ParticipantForm = ({ values, onChange, nextStage, prevStage }) => {
  const fields = [
    {
      name: "teamName",
      placeholder: "Team Name",
      type: "text",
      onChange: onChange("teamName"),
      value: values.teamName,
      required: true,
    },
    {
      name: "universty",
      placeholder: "Universty / School",
      type: "text",
      onChange: onChange("universty"),
      value: values.universty,
      required: true,
    },
    {
      name: "leaderName",
      placeholder: "Leader Name",
      type: "text",
      onChange: onChange("leaderName"),
      value: values.leaderName,
      required: true,
    },
    {
      name: "leaderPhoneNumber",
      placeholder: "Leader WhatsApp Number ",
      type: "text",
      onChange: onChange("leaderPhoneNumber"),
      value: values.leaderPhoneNumber,
      required: true,
    },
    {
      name: "teamMembersCount",
      placeholder: "No. Of team members",
      type: "text",
      onChange: onChange("teamMembersCount"),
      value: values.teamMembersCount,
      required: true,
    },
    {
      name: "secondMember",
      placeholder: "Team members name #2",
      type: "text",
      onChange: onChange("secondMember"),
      value: values.secondMember,
      required: true,
    },
    {
      name: "thirdMember",
      placeholder: "Team members name #3",
      type: "text",
      onChange: onChange("thirdMember"),
      value: values.thirdMember,
    },
    {
      name: "fourthMember",
      placeholder: "Team members name #4",
      type: "text",
      onChange: onChange("fourthMember"),
      value: values.fourthMember,
    },
    {
      name: "fifthMember",
      placeholder: "Team members name #5",
      type: "text",
      onChange: onChange("fifthMember"),
      value: values.fifthMember,
    },
    {
      name: "track",
      placeholder: "What's your track in the Competition?",
      onChange: onChange("track"),
      value: values.track,
      required: true,
      radio: true,
      options: ["Communication", "Energy", "Agriculture", "General"],
    },
    {
      name: "hackathonBefore",
      placeholder: "Has any of you attended hackathon(s) before? ",
      onChange: onChange("hackathonBefore"),
      value: values.hackathonBefore,
      required: true,
      radio: true,
      options: ["Yes", "No"],
    },
    {
      name: "hackathons",
      placeholder: "if yes, please mention them.",
      onChange: onChange("hackathons"),
      value: values.hackathons,
      type: "text",
    },
    {
      name: "solution",
      placeholder: "Describe your idea / solution to the challenge. ",
      onChange: onChange("solution"),
      value: values.solution,
      type: "text",
      required: true,
    },
    {
      name: "motivation",
      placeholder: "What motivates you to participate in the hackathon?",
      onChange: onChange("motivation"),
      value: values.motivation,
      type: "text",
      required: true,
    },
    {
      name: "comments",
      placeholder: "Is there anything else you would like to share?",
      onChange: onChange("comments"),
      value: values.comments,
      type: "text",
      required: true,
    },
    {
      name: "confirmation",
      placeholder:
        "By checking the box below, you agree that all your team members will attend our workshops from 29 to 30.",
      onChange: onChange("confirmation"),
      value: values.confirmation,
      type: "checkbox",
      required: true,
      checkBox: true,
    },
  ];

  return (
    <div className="space-even">
      {fields.map((field) =>
        !field.radio ? (
          <div key={field.name} className={`form-input`}>
            <label
              className={`${field.required && "required"}`}
              htmlFor={field.name}
            >
              {field.placeholder} :{" "}
            </label>
            {"  "}
            <input
              placeholder={field.placeholder}
              id={field.name}
              type={field.type}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
              required={field.required}
              checked={values[field.name] == "confirm"}
            />
          </div>
        ) : (
          <div key={field.name} className={`form-input`}>
            <label
              className={`${field.required && "required"}`}
              htmlFor={field.name}
            >
              {field.placeholder} :{" "}
            </label>
            {"  "}
            {field.options.map((option) => (
              <div className="radio">
                <input
                  type="radio"
                  onChange={field.onChange}
                  value={option}
                  name={field.name}
                  checked={values[field.name] == option}
                />{" "}
                <span>{option}</span>
              </div>
            ))}
          </div>
        )
      )}
      <div className="form-input d-flex justify-content-between">
        <button onClick={prevStage} className="btn-subscribe">
          Previous
        </button>
        <button onClick={nextStage} className="btn-subscribe">
          Next
        </button>
      </div>
    </div>
  );
};

export default ParticipantForm;
