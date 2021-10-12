import React from "react";
import vrAppIcon from "../../static/images/vrApp.svg";

const Vr = () => {
  return (
    <div
      className="px-5"
      style={{
        maxWidth: "65.125rem",
        margin: "auto",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <div className="d-flex justify-content-center pt-5">
        <img src={vrAppIcon} width="230" />
      </div>
      <h2>Enjoy Now!</h2>
      <a
        download
        className="btn-subscribe d-inline-block mt-3 button-primary"
        href="/apks/IEEEVR.apk"
      >
        Download
      </a>
    </div>
  );
};

export default Vr;
