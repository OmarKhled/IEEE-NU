import React, { useEffect } from "react";

const Confirmation = ({ values, onChange, prevStage, setStage }) => {
  const atendeeFields = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      onChange: onChange("name"),
      value: values.name,
      required: true,
    },
    {
      name: "email",
      placeholder: "E-mail",
      type: "email",
      onChange: onChange("email"),
      value: values.email,
      required: true,
    },
    {
      name: "age",
      placeholder: "Age",
      type: "number",
      onChange: onChange("age"),
      value: values.age,
      required: true,
    },
    {
      name: "phone",
      placeholder: "Phone",
      type: "text",
      onChange: onChange("phone"),
      value: values.phone,
      required: true,
    },
    {
      name: "ateendeeUniversty",
      placeholder: "Universty",
      type: "text",
      onChange: onChange("ateendeeUniversty"),
      value: values.ateendeeUniversty,
      required: true,
    },
    {
      name: "facebook",
      placeholder: "Facebook Profile",
      type: "text",
      onChange: onChange("facebook"),
      value: values.facebook,
      required: true,
    },
    {
      name: "government",
      placeholder: "Governorate",
      type: "text",
      onChange: onChange("government"),
      value: values.government,
      required: true,
    },
    {
      name: "comments",
      placeholder: "Any Comments?",
      type: "text",
      onChange: onChange("comments"),
      value: values.comments,
    },
  ];
  const participantFields = [
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
      name: "Second Member Whatsapp Number",
      placeholder: "Second Member Whatsapp Number",
      type: "text",
      onChange: onChange("secondMemberPhoneNumber"),
      value: values.secondMemberPhoneNumber,
      required: true,
    },

    {
      name: "Second Member Email",
      placeholder: "Second Member Email",
      type: "email",
      onChange: onChange("secondMemberEmail"),
      value: values.secondMemberEmail,
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
      name: "Third Member Whatsapp Number",
      placeholder: "Third Member Whatsapp Number",
      type: "text",
      onChange: onChange("thirdMemberPhoneNumber"),
      value: values.thirdMemberPhoneNumber,
    },

    {
      name: "Third Member Email",
      placeholder: "Third Member Email",
      type: "email",
      onChange: onChange("thirdMemberEmail"),
      value: values.thirdMemberEmail,
    },
    {
      name: "fourthMember",
      placeholder: "Team members name #4",
      type: "text",
      onChange: onChange("fourthMember"),
      value: values.fourthMember,
    },
    {
      name: "Fourth Member Whatsapp Number",
      placeholder: "Fourth Member Whatsapp Number",
      type: "text",
      onChange: onChange("fourthMemberPhoneNumber"),
      value: values.fourthMemberPhoneNumber,
    },
    {
      name: "Fourth Member Email",
      placeholder: "Fourth Member Email",
      type: "email",
      onChange: onChange("fourthMemberEmail"),
      value: values.fourthMemberEmail,
    },
    {
      name: "fifthMember",
      placeholder: "Team members name #5",
      type: "text",
      onChange: onChange("fifthMember"),
      value: values.fifthMember,
    },
    {
      name: "Fifth Member Whatsapp Number",
      placeholder: "Fifth Member Whatsapp Number",
      type: "text",
      onChange: onChange("fifthMemberPhoneNumber"),
      value: values.fifthMemberPhoneNumber,
    },
    {
      name: "Fifth Member Email",
      placeholder: "Fifth Member Email",
      type: "email",
      onChange: onChange("fifthMemberEmail"),
      value: values.fifthMemberEmail,
    },
    {
      name: "track",
      placeholder: "What's your track in the Competition?",
      onChange: onChange("track"),
      value: values.track,
      required: true,
      radio: true,
      options: [
        "Renewable energy and energy efficiency in space stations",
        "Communication and Data Transformation in the new space era",
        "Agriculture for Nutrition and Oxygen production",
        "General track",
      ],
    },
    {
      name: "generalTrack",
      placeholder: "If general track please write your idea..",
      type: "textarea",
      onChange: onChange("generalTrack"),
      value: values.generalTrack,
    },
    {
      name: "hackathonBefore",
      placeholder: "Has any of you attended compitition(s) before? ",
      onChange: onChange("hackathonBefore"),
      value: values.hackathonBefore,
      required: true,
      radio: true,
      options: ["Yes", "No"],
    },
    {
      name: "hackathons",
      placeholder: "if yes, please mention them.",
      type: "textarea",
      onChange: onChange("hackathons"),
      value: values.hackathons,
    },
    {
      name: "solution",
      placeholder: "Describe your idea / solution to the challenge. ",
      type: "textarea",
      onChange: onChange("solution"),
      value: values.solution,
      required: true,
    },
    {
      name: "motivation",
      placeholder: "What motivates you to participate in the compitition?",
      type: "textarea",
      onChange: onChange("motivation"),
      value: values.motivation,
      required: true,
    },
    {
      name: "comments",
      placeholder: "Is there anything else you would like to share?",
      onChange: onChange("comments"),
      value: values.comments,
      type: "text",
    },
  ];

  useEffect(() => {
    var form = document.querySelector(".pageclip-form");
    window.Pageclip.form(form, {
      onResponse: (err, response) => {
        if (err) throw err;
        setStage(4);
      },
      successTemplate: "<span>Thank you!</span>",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="confirmation">
      {values.type === "atendee" ? (
        <form
          action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/Space-Summit-Atendees"
          method="post"
          className="pageclip-form"
        >
          {atendeeFields.map((field) => (
            <div key={field.name} className="confirm-field text-center">
              <input
                type="text`"
                value={field.value}
                name={field.name}
                style={{ display: "none" }}
              />
              <h4>{field.placeholder} :</h4>
              <p className="confirmation-muted">{field.value}</p>
            </div>
          ))}
          <div className="form-input d-flex justify-content-between">
            <button onClick={prevStage} className="btn-subscribe">
              Previous
            </button>
            <button
              type="submit"
              className="btn-subscribe pageclip-form__submit"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      ) : (
        <form
          target="_self"
          action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/Space-Summit-Participants"
          method="post"
          className="pageclip-form"
        >
          {participantFields.map(
            (field) =>
              field.value !== "" && (
                <div key={field.name} className="confirm-field text-center">
                  <input
                    type="text`"
                    value={field.value}
                    name={field.name}
                    style={{ display: "none" }}
                  />
                  <h4>{field.placeholder} :</h4>
                  <p className="confirmation-muted">{field.value}</p>
                </div>
              )
          )}
          <div className="form-input d-flex justify-content-between">
            <button onClick={prevStage} className="btn-subscribe">
              Previous
            </button>
            <button
              type="submit"
              className="btn-subscribe pageclip-form__submit"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Confirmation;
