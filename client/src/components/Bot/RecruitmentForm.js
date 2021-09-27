import React, { useState } from "react";
import {
  generalInfo,
  hrInfo,
  marketingInfo,
  mediaInfo,
  operationsInfo,
  prInfo,
  secretaryInfo,
  technicalInfo,
} from "./data";
import Input from "./Input";
import { isEmail } from "validator";
import audio from "../../static/audio/wrong-answer.mp3";

const buzzer = new Audio(audio);

const RecruitmentForm = ({
  setOuterStage,
  setOuterData,
  outerData,
  initStage,
  setAngry,
}) => {
  const [stage, setStage] = useState(initStage);
  const [formInputsInitStage, setFormInputsInitStage] = useState(0);
  const handleStageChange = (newStage) => {
    if (newStage <= 2 && newStage > 0) {
      setStage(newStage);
      if (newStage === 1) {
        setFormInputsInitStage(Object.keys(generalInfo).length - 1);
      } else {
        setFormInputsInitStage(0);
      }
    } else {
      if (!(newStage > 0)) {
        setOuterStage(1);
      } else {
        setOuterStage(3);
      }
    }
  };

  return (
    <div>
      {stage === 1 ? (
        <>
          <FormGroup
            data={generalInfo}
            setOuterStage={handleStageChange}
            outerStage={stage}
            {...{ setOuterData, outerData }}
            initStage={formInputsInitStage}
            setAngry={setAngry}
          />
        </>
      ) : (
        stage === 2 && (
          <div>
            <FormGroup
              data={
                outerData.committee.value === "HR committee"
                  ? hrInfo
                  : outerData.committee.value === "Secretary"
                  ? secretaryInfo
                  : outerData.committee.value === "PR committee"
                  ? prInfo
                  : outerData.committee.value === "Media committee"
                  ? mediaInfo
                  : outerData.committee.value === "Marketing committee"
                  ? marketingInfo
                  : outerData.committee.value === "Technical committee"
                  ? technicalInfo
                  : outerData.committee.value === "Operations committee" &&
                    operationsInfo
              }
              setOuterStage={handleStageChange}
              outerStage={stage}
              {...{ setOuterData, outerData }}
              initStage={formInputsInitStage}
              setAngry={setAngry}
            />
          </div>
        )
      )}
    </div>
  );
};

const FormGroup = ({
  setOuterStage,
  setOuterData,
  outerData,
  outerStage,
  data,
  initStage,
  setAngry,
}) => {
  const fields = [];
  for (const key in data) {
    const el = data[key];
    fields.push({ ...el, key });
  }

  const [stage, setStage] = useState(initStage);
  const [faulty, setFaulty] = useState(false);

  let faultyTimeOut;

  const faultyInput = () => {
    clearTimeout(faultyTimeOut);
    setAngry();
    buzzer.play();
    setFaulty(true);
    faultyTimeOut = window.setTimeout(() => {
      setFaulty(false);
    }, 2000);
  };

  const incrementStage = () => {
    if (outerData[fields[stage].key].required) {
      if (
        String(outerData[fields[stage].key].value).replace(/\s/g, "").length > 0
      ) {
        if (fields[stage].type === "email") {
          if (isEmail(outerData[fields[stage].key].value)) {
            if (stage + 1 < fields.length) {
              setStage(stage + 1);
            } else {
              setOuterStage(outerStage + 1);
            }
          } else {
            faultyInput();
          }
        } else {
          if (stage + 1 < fields.length) {
            if (fields[stage + 1].prerequisite) {
              if (outerData[fields[stage].key].value) {
                setOuterData({
                  ...outerData,
                  [fields[stage + 1].key]: {
                    ...fields[stage + 1],
                    required: true,
                    value: outerData[fields[stage + 1].key].value,
                  },
                });
                setStage(stage + 1);
              } else {
                setOuterData({
                  ...outerData,
                  [fields[stage + 1].key]: {
                    ...fields[stage + 1],
                    required: false,
                    value: outerData[fields[stage + 1].key].value,
                  },
                });
                if (stage + 2 < fields.length) {
                  setStage(stage + 2);
                } else {
                  setOuterStage(outerStage + 1);
                }
              }
            } else {
              setStage(stage + 1);
            }
          } else {
            setOuterStage(outerStage + 1);
          }
        }
      } else {
        faultyInput();
      }
    } else {
      if (stage + 1 < fields.length) {
        setStage(stage + 1);
      } else {
        setOuterStage(outerStage + 1);
      }
    }
  };
  const decrementStage = () => {
    if (stage - 1 >= 0) {
      const prevField = outerData[fields[stage - 1].key];
      if (prevField.prerequisite) {
        if (prevField.required) {
          setStage(stage - 1);
        } else {
          if (stage - 2 >= 0) {
            setStage(stage - 2);
          } else {
            setOuterStage(outerStage - 1);
          }
        }
      } else {
        setStage(stage - 1);
      }
    } else {
      setOuterStage(outerStage - 1);
    }
  };

  return (
    <div>
      <Input field={fields[stage]} {...{ outerData, setOuterData, faulty }} />
      {/* First value */}
      <div className="d-flex align-items-center justify-content-between gap-auto mt-3">
        <button className="button button-primary" onClick={decrementStage}>
          Back
        </button>
        <button className="button button-primary" onClick={incrementStage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RecruitmentForm;
