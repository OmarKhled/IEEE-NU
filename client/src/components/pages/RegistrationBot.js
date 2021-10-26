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
import axios from "axios";
import LoadingComponent from "../Loading";

const RegistrationBot = () => {
  const [stage, setStage] = useState(1);
  const [newComerStage, setNewComerStage] = useState(1);
  const [dataStage, setDataStage] = useState(1);
  const [botSrc, setBotSrc] = useState(zaki);
  const [loading, setLoading] = useState(false);
  const initData = {
    newComer: false,
    ...generalInfo,
    ...technicalInfo,
    ...hrInfo,
    ...prInfo,
    ...secretaryInfo,
    ...mediaInfo,
    ...marketingInfo,
    ...operationsInfo,
  };
  const [data, setData] = useState(
    localStorage.getItem("recrutmentData")
      ? { ...initData, ...JSON.parse(localStorage.getItem("recrutmentData")) }
      : initData
  );

  useEffect(() => {
    if (stage === 2) {
      setNewComerStage(2);
    } else if (stage === 3) {
      setDataStage(2);
    } else if (stage === 1) {
      setDataStage(1);
    }
  }, [stage]);

  useEffect(() => {
    localStorage.setItem("recrutmentData", JSON.stringify(data));
  }, [data]);

  const setAngry = () => {
    setBotSrc(angryZaki);
    setTimeout(() => {
      setBotSrc(zaki);
    }, 2000);
  };

  const onSubmit = async () => {
    setLoading(true);
    const res = await axios.post("/api/recruitment", data);
    setTimeout(() => {
      if (res.data.application) {
        setStage(4);
      } else {
        console.log(res);
      }
      setLoading(false);
    }, [3000]);
  };

  const reset = () => {
    localStorage.removeItem("recrutmentData");
    window.location.reload();
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
          ) : stage === 3 ? (
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
                <button
                  className="button button-primary d-flex align-items-center gap-auto"
                  onClick={onSubmit}
                  disabled={loading}
                >
                  <span>Submit </span>
                  {loading && <LoadingComponent color={"secondary"} border />}
                </button>
              </div>
            </>
          ) : (
            stage === 4 && (
              <>
                <h3 className="head mb-3">Done!</h3>
                <h5>
                  Your response have been submited. Thanks for your interest in
                  applying for IEEENU, someone will contact you soon.
                </h5>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="button button-primary" onClick={reset}>
                    Submit another resonse
                  </button>
                </div>
              </>
            )
          )}
        </div>
      </div>
      <img
        style={{ display: "none", width: "2px" }}
        src={angryZaki}
        alt="IEEENU Personal Assistant"
        className="bot-img"
      />
    </div>
  );
};

export default RegistrationBot;
