import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";

import editions from "../../../../../data/editions";
import Button from "../../../../../components/Button";

const EventDay = () => {
  const { query } = useRouter();
  const [form, setForm] = useState(undefined);

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
    console.log(data);

    var config = {
      method: "put",
      url: "https://api.pageclip.co/data/space-summit-event-day-second-edition",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic YXBpX2VuTTdsN0dXd0xMekp2cmtSZkVTc2ZTZHRlNU4zWnJ0Og==",
      },
      data: JSON.stringify(data),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    window.onbeforeunload = null;
  };

  return (
    <main className="__root">
      <form
        style={{ maxWidth: "60rem", margin: "auto" }}
        onSubmit={handleSubmit(submitAction)}
        className="form mx-auto summitForm"
        action="https://send.pageclip.co/EkGSRbgnXNZfSlDpgwXIMjhNzxA19ZPm/space-summit-event-day-second-edition"
        method="post"
      >
        <div className="body">
          <h3 className="text-center mb-4">Space Summit Event Registration</h3>
          {form?.map((field) => (
            <div key={field?.name}>
              <label style={{ fontWeight: "600" }}>{field?.label}</label>
              {field.type !== "select" ? (
                <input
                  type={field?.type}
                  {...register(field?.name, {
                    required: {
                      value: field?.required,
                      message: `${field?.label} Field is required`,
                    },
                    ...field?.validation,
                  })}
                  placeholder={field?.placeholder}
                  className={`${errors[field?.name] ? "err" : ""}`}
                />
              ) : (
                <select
                  {...register(field.name, {
                    required: {
                      value: field.required,
                      message: `${field.label} Field is required`,
                    },
                  })}
                  name={field.name}
                  defaultValue={""}
                  className={`${errors[field.name] ? "err" : ""}`}
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
            <Button type={"submit"} className="ms-auto mt-4 m-auto d-block">
              Submit
            </Button>
          )}
        </div>
      </form>
    </main>
  );
};

export default EventDay;
