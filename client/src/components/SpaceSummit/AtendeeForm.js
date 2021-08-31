import React from "react";

const AtendeeForm = ({ values, onChange, onSubmit }) => {
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
      type: "text",
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

  return (
    <div className="space-even">
      {fields.map((field) => (
        <div key={field.name} className="form-input">
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
      <div className="form-input d-flex justify-content-center">
        <button className="btn-subscribe" onClick={onSubmit}>
          Submit
        </button>
      </div>
      {/* <p style={{ lineHeight: "1.9rem" }}>
        Due to the current situation and COVID-19 pandemic we are limited with a
        certain number of seats. As a result, we regret to inform you that the
        form is closed due to reaching the required number. However, we are
        trying hard to add more seats in the upcoming days, so follow the event
        page for any updates
      </p> */}
    </div>
  );
};

export default AtendeeForm;
