import React from "react";

const LoadingComponent = ({ color, border }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`spinner-${border ? "border" : "grow"} ${
          color ? `text-${color}` : "text-primry"
        } text-primary`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
