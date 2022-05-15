import data from "../../data/gpaForm";
import { useForm } from "react-hook-form";
import axios from "axios";

const gpapredictor = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  const onSubmit = async (e) => {
    console.log(e);
    const res = await axios.post(
      "https://api.ieeenu.com/api/ml",
      JSON.stringify(e)
    );
    console.log(res);
  };
  return (
    <div className="__root gpa">
      <main>
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
      </main>
    </div>
  );
};

export default gpapredictor;
