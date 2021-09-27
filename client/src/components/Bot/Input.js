import React from "react";

const Input = ({ field, outerData, setOuterData }) => {
  return (
    <div>
      <h3 className="head mb-3">
        {field.label}{" "}
        {outerData[field.key].required && (
          <span style={{ color: "red" }}>*</span>
        )}{" "}
      </h3>
      {field.description && (
        <h6 className="text-justify mb-4">{field.description}</h6>
      )}
      {field.type === "text" ||
      field.type === "email" ||
      field.type === "number" ? (
        <input
          className="bot-input"
          value={outerData[field.key].value}
          name={field.name}
          onChange={(e) =>
            setOuterData({
              ...outerData,
              [field.key]: {
                ...field,
                value: e.target.value,
                required: outerData[field.key].required,
              },
            })
          }
          placeholder={field.placeholder}
          type={field.type}
        />
      ) : field.type === "select" ? (
        <div
          className={`d-flex flex-wrap ${
            field.selectStyle === "inline"
              ? "justify-content-center gap-auto"
              : "row"
          } flex-wrap px-4`}
        >
          {field.options.map((option, index) => (
            <label
              onClick={() =>
                setOuterData({
                  ...outerData,
                  [field.key]: {
                    ...field,
                    value: option,
                    required: outerData[field.key].required,
                  },
                })
              }
              key={index}
              className={`d-flex align-items-center gap-auto-1 mb-2 ${
                field.selectStyle === "inline"
                  ? "row space-even justify-content-center"
                  : ""
              } bot-input-radio`}
            >
              <input
                checked={outerData[field.key].value === option}
                type="radio"
                name={field.name}
                value={option}
              />
              <span>
                {option === true ? "Yes" : option === false ? "No" : option}
              </span>
            </label>
          ))}
        </div>
      ) : field.type === "check" ? (
        <div
          className={`d-flex flex-wrap ${
            field.selectStyle === "inline"
              ? "justify-content-center gap-auto"
              : "row"
          } flex-wrap px-4`}
        >
          {field.options.map((option, index) => (
            <div
              className={`d-flex align-items-center gap-auto-1 mb-2 ${
                field.selectStyle === "inline"
                  ? "row space-even justify-content-center"
                  : ""
              }`}
            >
              <input
                checked={outerData[field.key].value.includes(option)}
                type="checkbox"
                name={field.name}
                id={option}
                value={option}
              />
              <label
                onClick={() => {
                  outerData[field.key].value.includes(option)
                    ? setOuterData({
                        ...outerData,
                        [field.key]: {
                          ...field,
                          value: outerData[field.key].value.filter(
                            (value) => value !== option
                          ),
                          required: outerData[field.key].required,
                        },
                      })
                    : setOuterData({
                        ...outerData,
                        [field.key]: {
                          ...field,
                          value: [...outerData[field.key].value, option],
                          required: outerData[field.key].required,
                        },
                      });
                }}
                key={index}
                htmlFor={option}
              >
                <span>{option}</span>
              </label>
            </div>
          ))}
        </div>
      ) : (
        field.type === "textarea" && (
          <textarea
            className="bot-input"
            placeholder={field.placeholder}
            value={outerData[field.key].value}
            onChange={(e) =>
              setOuterData({
                ...outerData,
                [field.key]: {
                  ...field,
                  value: e.target.value,
                  required: outerData[field.key].required,
                },
              })
            }
            name={field.name}
          />
        )
      )}
    </div>
  );
};

export default Input;
