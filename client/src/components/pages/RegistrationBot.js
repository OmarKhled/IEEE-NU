import React, { useState, useEffect } from "react";
import zaki from "../../static/images/zaki.svg";
import angryZaki from "../../static/images/zaki-angry.svg";
import Newcomer from "../Bot/Newcomer";
import {
  generalInfo,
  hrInfo,
  marketingInfo,
  mediaInfo,
  operationsInfo,
  prInfo,
  secretaryInfo,
  technicalInfo,
} from "../Bot/data";
import RecruitmentForm from "../Bot/RecruitmentForm";

const RegistrationBot = () => {
  const [stage, setStage] = useState(1);
  const [newComerStage, setNewComerStage] = useState(1);
  const [dataStage, setDataStage] = useState(1);
  const [botSrc, setBotSrc] = useState(zaki);
  const [data, setData] = useState({
    newComer: false,
    ...generalInfo,
    ...technicalInfo,
    ...hrInfo,
    ...prInfo,
    ...secretaryInfo,
    ...mediaInfo,
    ...marketingInfo,
    ...operationsInfo,
  });

  useEffect(() => {
    if (stage === 2) {
      setNewComerStage(2);
    } else if (stage === 3) {
      setDataStage(2);
    } else if (stage === 1) {
      setDataStage(1);
    }
  }, [stage]);

  const setAngry = () => {
    setBotSrc(angryZaki);
    setTimeout(() => {
      setBotSrc(zaki);
    }, 2000);
  };

  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div className="px-2" style={{ minHeight: "90vh", margin: "auto" }}>
      <div className="bot-container">
        <div className="bot-img-contianer">
          <img
            src={botSrc}
            alt="IEEENU Personal Assistant"
            className="bot-img"
          />
        </div>
        <div className="content px-4">
          {stage === 1 ? (
            <Newcomer
              setOuterStage={setStage}
              setOuterData={setData}
              outerData={data}
              initStage={newComerStage}
            />
          ) : stage === 2 ? (
            <RecruitmentForm
              setOuterStage={setStage}
              setOuterData={setData}
              outerData={data}
              initStage={dataStage}
              setAngry={setAngry}
            />
          ) : (
            stage === 3 && (
              <>
                <h3 className="head mb-3">We are all done!</h3>
                <h5>
                  You've filled all of the required data, go back if you want to
                  edit anything or click submit to finish
                </h5>
                <div className="d-flex align-items-center justify-content-between gap-auto mt-3">
                  <button
                    className="button button-primary"
                    onClick={() => setStage(2)}
                  >
                    Back
                  </button>
                  <button className="button button-primary" onClick={onSubmit}>
                    Submit
                  </button>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationBot;
