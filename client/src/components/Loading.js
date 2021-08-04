import React from "react";
import { Loading } from "react-bootstrap";

const LoadingComponent = () => {
  return (
    <div className="d-flex justify-content-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
