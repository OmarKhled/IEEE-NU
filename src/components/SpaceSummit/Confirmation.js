import React from "react";

const Confirmation = ({ values, onChange, nextStage, prevStage }) => {
  const participantFields = [
    {
      name: "Team Name",

      value: values.teamName,
    },
    {
      name: "Universty / School",

      value: values.universty,
    },
    {
      name: "Leader Name",

      value: values.leaderName,
    },
    {
      name: "Leader WhatsApp Number ",

      value: values.leaderPhoneNumber,
    },
    {
      name: "No. Of team members",

      value: values.teamMembersCount,
    },
    {
      name: "Team members name #2",

      value: values.secondMember,
    },
    {
      name: "Team members name #3",

      value: values.thirdMember,
    },
    {
      name: "Team members name #4",

      value: values.fourthMember,
    },
    {
      name: "Team members name #5",

      value: values.fifthMember,
    },
    {
      name: "What's your track in the Competition?",

      value: values.track,

      radio: true,
      options: ["Communication", "Energy", "Agriculture", "General"],
    },
    {
      name: "Has any of you attended hackathon(s) before? ",

      value: values.hackathonBefore,

      radio: true,
      options: ["Yes", "No"],
    },
    {
      name: "if yes, please mention them.",

      value: values.hackathons,
    },
    {
      name: "Describe your idea / solution to the challenge. ",

      value: values.solution,
    },
    {
      name: "What motivates you to participate in the hackathon?",

      value: values.motivation,
    },
    {
      name: "Is there anything else you would like to share?",

      value: values.comments,
    },
  ];

  const atendeeFields = [
    {
      name: "Name",
      value: values.name,
    },
    {
      name: "E-mail",
      value: values.email,
    },
    {
      name: "Age",
      value: values.age,
    },
    {
      name: "Phone",
      value: values.phone,
    },
    {
      name: "Universty",
      value: values.ateendeeUniversty,
    },
    {
      name: "Facebook Profile",
      value: values.facebook,
    },
    {
      name: "Government",
      value: values.government,
    },
  ];
  return (
    <div className="confirmation">
      {values.type === "atendee"
        ? atendeeFields.map((field) => (
            <div className="confirm-field text-center">
              <h4>{field.name} :</h4>
              <p className="confirmation-muted">{field.value}</p>
            </div>
          ))
        : participantFields.map(
            (field) =>
              field.value !== "" && (
                <div className="confirm-field text-center">
                  <h4>{field.name} :</h4>
                  <p className="confirmation-muted">{field.value}</p>
                </div>
              )
          )}
      <div className="form-input d-flex justify-content-between">
        <button onClick={prevStage} className="btn-subscribe">
          Previous
        </button>
        <button onClick={nextStage} className="btn-subscribe">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
