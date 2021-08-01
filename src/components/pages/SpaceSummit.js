import React from "react";
import poster from "../../static/images/Space.jpg";
import SpaceForm from "../SpaceSummit/SpaceForm";

const SpaceSummit = () => {
  return (
    <div
      className="px-5"
      style={{ maxWidth: "65.125rem", margin: "auto", minHeight: "80vh" }}
    >
      <div>
        <img
          src={poster}
          alt="Space summit"
          className="d-block w-100 slide mb-4"
        />
        <div className="d-flex justify-content-center align-items-center">
          <h1>Space Summit</h1>
        </div>
        <p className="pt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          reiciendis inventore suscipit consectetur quae. Repellat, numquam?
          Nulla assumenda possimus expedita eligendi iusto sunt eos laboriosam
          eius sit iure incidunt, asperiores quod rem odio eaque. Laborum
          dolorem perspiciatis accusantium id, aspernatur necessitatibus
          debitis. Asperiores facilis blanditiis quia dicta nostrum error nemo.
        </p>
        <SpaceForm />
      </div>
    </div>
  );
};

export default SpaceSummit;
