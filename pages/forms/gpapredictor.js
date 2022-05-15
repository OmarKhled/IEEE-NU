import Head from "next/head";
import { useState, useEffect } from "react";

import data from "../../data/gpaForm";
import { useForm } from "react-hook-form";
import axios from "axios";

const Gpapredictor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [stage, setStage] = useState(1);
  const [res, setRes] = useState({});

  useEffect(() => {
    console.log(res);
  }, [res]);

  const onSubmit = async (e) => {
    try {
      axios
        .post("https://api.ieeenu.com/api/ml", {
          data: JSON.stringify(e),
        })
        .then((res) => {
          console.log(res.data);
          setStage(2);
          setRes(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>See your GPA now with IEEENU CIS Predictor!</title>
        <meta
          property="og:title"
          content="See your GPA now with IEEENU Predictor!"
          key={"title"}
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/0qZ3ygR/Screenshot-from-2022-05-15-20-09-57.png"
          key={"image"}
        />
      </Head>
      <div className="__root gpa">
        <main>
          {stage == 1 ? (
            <>
              <form
                className="form mx-auto gpaForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="cover"></div>
                <div className="body">
                  {data.map((item) => (
                    <div key={item.name}>
                      <label>{item.label}</label>
                      {item.type == "range" ? (
                        <>
                          <input
                            {...register(item.name, {
                              required: {
                                value: item.required,
                                message: `${item.label} Field is required`,
                              },
                              ...item?.validation,
                            })}
                            type={item.type}
                            min={item.start}
                            max={item.end}
                            defaultValue={item.value}
                          />
                          <div className="d-flex justify-content-between">
                            <p>{item.start + 1}</p>
                            <p>{item.end + 1}</p>
                          </div>
                        </>
                      ) : item.type != "select" ? (
                        <input
                          type={item.type}
                          {...register(item.name, {
                            required: {
                              value: item.required,
                              message: `${item.label} Field is required`,
                            },
                            ...item?.validation,
                          })}
                          placeholder={item.placeholder}
                          className={`${errors[item.name] ? "err" : ""}`}
                        />
                      ) : (
                        <>
                          <select
                            {...register(item.name, {
                              required: {
                                value: item.required,
                                message: `${item.label} Field is required`,
                              },
                            })}
                            name={item.name}
                            className={`${errors[item.name] ? "err" : ""}`}
                          >
                            {item.options ? "hi" : "not hi"}
                            {item.options.map((option, index) => (
                              <option value={option.value} key={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <input
                  className={`btn btn-secondary mx-auto d-block`}
                  type={"submit"}
                  value={"Submit"}
                />
              </form>
            </>
          ) : (
            <>
              <section className="gpaForm result">
                <div className="body">
                  <div className="d-flex gap-h-2 justify-content-center">
                    <div>
                      <img src="/images/predictor/1.png" />
                    </div>
                    <div>
                      <img src="/images/predictor/2.png" />
                    </div>
                  </div>
                  <h3 className="mt-3">Your GPA Will remain at</h3>
                  <h3>{res.PCGPA.split("[")[1].split("]")[0]}</h3>

                  <h5>
                    {res.Carries
                      ? "And you even Carry my friends in the projects!"
                      : "And you don't Carry My friends in the projects"}
                  </h5>
                </div>
                <div className="bg"></div>
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Gpapredictor;
