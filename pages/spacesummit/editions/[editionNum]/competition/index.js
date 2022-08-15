import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import axios from "axios";

import editions from "../../../../../data/editions";
import Button from "../../../../../components/Button";
import Head from "next/head";

const Competition = () => {
  const { query } = useRouter();
  const [form, setForm] = useState(undefined);
  const [stage, setStage] = useState(1);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (query !== undefined && query.editionNum) {
      const edition = editions.find((elem) => elem.id == query.editionNum);
      setForm(edition.competitionForm);
    }
  }, [query]);

  const methods = useForm();
  const { handleSubmit, getValues } = methods;

  const submitAction = async () => {
    setStage(2);
    document.getElementById("top").scrollIntoView();
    window.onbeforeunload = null;
  };

  const finalSubmitAction = async (data) => {
    const res = await axios.post("/api/spacesummitforms", {
      data: data,
      form: "egyptianSpaceSummitSecondEditionCompetition",
    });
    setSuccess(res.data.success == true ? true : false);
    res.data.success && document.getElementById("top").scrollIntoView();
    window.onbeforeunload = null;
  };

  return (
    <main className="__root">
      <Head>
        <title key={"title"}>Space Summit Competition Registration Form</title>
      </Head>
      {!success ? (
        <FormProvider {...methods}>
          <div
            style={{ maxWidth: "60rem", margin: "auto" }}
            className="form mx-auto summitForm"
            method="post"
          >
            <div className="body">
              <h3 className="text-center mb-4">
                Space Summit Competition Registration
              </h3>
              {stage === 1 ? (
                <form onSubmit={handleSubmit(submitAction)}>
                  {form?.firstStage?.map((field) => (
                    <InputField key={field?.label} field={field} />
                  ))}
                  <Button
                    type={"submit"}
                    className="ms-auto mt-4 m-auto d-block"
                  >
                    Next
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleSubmit(finalSubmitAction)}>
                  {getValues("Level") ===
                  "Junior | High School and Elemantry School Students" ? (
                    <>
                      {form?.secondStage?.junior?.map((field) => (
                        <InputField key={field?.label} field={field} />
                      ))}
                    </>
                  ) : (
                    <>
                      {form?.secondStage?.advanced?.map((field) => (
                        <InputField key={field?.label} field={field} />
                      ))}
                    </>
                  )}
                  {form?.secondStage?.rest?.map((field) => (
                    <InputField key={field?.label} field={field} />
                  ))}
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
                    <Button
                      type={"button"}
                      className="mt-4 mx-auto d-block"
                      onClick={() => {
                        setStage(stage - 1);
                        document.getElementById("top").scrollIntoView();
                      }}
                    >
                      Previous
                    </Button>
                    <Button
                      type={"submit"}
                      className="mt-4 mx-auto mb-0 d-block"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FormProvider>
      ) : (
        <div className="form mx-auto summitForm d-flex justify-content-center align-items-center flex-column">
          <p className="text-center">
            Thanks for registering, your response has been recorded!
          </p>
          <small
            style={{
              textDecoration: "underline",
              marginTop: "0.4rem",
              cursor: "pointer",
            }}
            onClick={() => location.reload()}
          >
            Submit another response
          </small>
        </div>
      )}
    </main>
  );
};

const InputField = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div key={field?.label}>
      <label style={{ fontWeight: "600" }}>
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
            {...register(field?.name, {
              required: {
                value: field?.required,
                message: `${field?.name} Field is required`,
              },
              ...field?.validation,
            })}
            style={{ width: "100%", maxWidth: "100%" }}
            rows="7"
            name={field?.name}
            className={`${errors[field?.name] ? "err" : ""}`}
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

export default Competition;
