import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import form from "../forms/recruitment";
import Button from "./Button";
import axios from "axios";

const RecruitmentForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitAction = async (data) => {
    setLoading(true);
    console.log(data);
    const res = await axios.post("/api/formSubmit", {
      data: data,
      form: "recruitment2023",
    });
    setSuccess(res.data.success == true ? true : false);
    setLoading(false);

    res.data.success && document.getElementById("top").scrollIntoView();
    window.onbeforeunload = null;
  };

  return (
    <FormProvider {...methods}>
      {success ? (
        <p className="text-center mt-2">Your record has been submitted</p>
      ) : (
        <form onSubmit={handleSubmit(submitAction)}>
          {form?.map((field) => (
            <InputField key={field?.label} field={field} />
          ))}
          <Button
            type={"submit"}
            disabled={loading}
            className="ms-auto mt-4 m-auto d-block"
          >
            Submit
          </Button>
        </form>
      )}
    </FormProvider>
  );
};

const InputField = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div key={field?.label}>
      <label style={{ fontWeight: "600", textAlign: "left" }}>
        {field?.label[0].toUpperCase() + field?.label.slice(1)}{" "}
        {field.required && <span style={{ color: "red" }}>*</span>}
      </label>
      {field.note && <small className="muted">{field.note}</small>}
      {field.type !== "select" ? (
        field.type !== "textarea" ? (
          <input
            type={field?.type}
            {...register(field?.label, {
              required: {
                value: field?.required,
                message: `${field?.label} Field is required`,
              },
              ...field?.validation,
            })}
            name={field?.label}
            placeholder={field?.placeholder}
            className={`${errors[field?.label] ? "err" : ""}`}
          />
        ) : (
          <textarea
            {...register(field?.label, {
              required: {
                value: field?.required,
                message: `${field?.name} Field is required`,
              },
              ...field?.validation,
            })}
            style={{ width: "100%", maxWidth: "100%" }}
            rows="7"
            name={field?.label}
            className={`${errors[field?.label] ? "err" : ""}`}
          ></textarea>
        )
      ) : (
        <select
          {...register(field.label, {
            required: {
              value: field.required,
              message: `${field.label} Field is required`,
            },
          })}
          name={field?.label}
          defaultValue={""}
          className={`${errors[field.label] ? "err" : ""}`}
        >
          {field.options?.map((option, index) => (
            <option
              value={index == 0 ? "" : option}
              disabled={index == 0}
              key={option}
            >
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default RecruitmentForm;
