import React from "react";

const UserType = ({ values, onChange, nextStage }) => {
  return (
    <div className="space-even">
      <h3 className="required">You are registering as</h3>
      <div className="radio">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            onChange={onChange("type")}
            value="atendee"
            name="type"
            checked={values.type == "atendee"}
          />{" "}
          <span>Attendee</span>
        </label>
      </div>
      <div className="radio">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            onChange={onChange("type")}
            value="participant"
            name="type"
            checked={values.type == "participant"}
          />{" "}
          <span>Participant</span>
        </label>
      </div>
      <button onClick={nextStage} className="btn-subscribe">
        Next
      </button>
    </div>
  );
};

export default UserType;
