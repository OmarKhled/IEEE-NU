import React from "react";

const AtendeeForm = ({ values, onChange, nextStage, prevStage }) => {
  const fields = [
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
      value: values.agess,
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
      placeholder: "Government",
      type: "text",
      onChange: onChange("government"),
      value: values.government,
      required: true,
    },
  ];

  return (
    <div className="space-even">
      {fields.map((field) => (
        <div className="form-input">
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
          />
        </div>
      ))}
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

export default AtendeeForm;
