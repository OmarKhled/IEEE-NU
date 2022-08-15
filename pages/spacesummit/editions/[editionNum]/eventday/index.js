import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";

import editions from "../../../../../data/editions";
import Button from "../../../../../components/Button";
import Head from "next/head";

const EventDay = () => {
  const { query } = useRouter();
  const [form, setForm] = useState(undefined);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query !== undefined && query.editionNum) {
      const edition = editions.find((elem) => elem.id == query.editionNum);
      setForm(edition.eventDayForm);
    }
  }, [query]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitAction = async (data) => {
    setLoading(true);
    const res = await axios.post("/api/spacesummitforms", {
      data: data,
      form: "egyptianSpaceSummitSecondEditionEventDay",
    });
    if (res.data.success == true) {
      setSuccess(true);
      document.getElementById("top").scrollIntoView();
      setLoading(false);
    }
    window.onbeforeunload = null;
  };

  return (
    <main className="__root">
      <Head>
        <title key={"title"}>Space Summit Registration Form</title>
      </Head>
      {!success ? (
        <form
          style={{ maxWidth: "60rem", margin: "auto" }}
          onSubmit={handleSubmit(submitAction)}
          className="form mx-auto summitForm"
          method="post"
        >
          <div className="body">
            <h3 className="text-center mb-4">Space Summit Registration</h3>
            {form?.map((field) => (
              <div key={field?.label}>
                <label style={{ fontWeight: "600" }}>
                  {field?.label[0].toUpperCase() + field?.label.slice(1)}{" "}
                  {field.required && <span style={{ color: "red" }}>*</span>}
                </label>
                {field.note && <small className="muted">{field.note}</small>}
                {field.type !== "select" ? (
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
                  <select
                    {...register(field.label, {
                      required: {
                        value: field?.required,
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
            ))}
            {form && (
              <Button
                type={"submit"}
                className="ms-auto mt-4 m-auto d-block"
                disabled={loading && "disabled"}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
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

export default EventDay;
