import React from "react";
// import poster from "../../static/images/Space.jpg";
import SpaceForm from "../SpaceSummit/SpaceForm";
import poster from "../../static/images/EgyptianSummit.png";

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
          <h1>Egyptian Space Summit</h1>
        </div>
        <p className="pt-3" id="form-begin">
          The Earth is the cradle of humanity, but mankind cannot stay in the
          cradle forever." - Konstantin E. Tsiolkovsky.
          <br />
          In recent years, the global interest in exploring space has grown.
          <br />
          And it is time for Egypt to find its way into the space industry. The
          Egyptian Space Summit aspires to leave Egypt's mark in the space
          industry by investing in its youth's creative ideas. IEEENU, in
          collaboration with the Egyptian Space Agency, gives you the chance to
          be part of the upcoming space development.
          <br />
          You can register as an attendee or participant through the below form.
        </p>
        <br />
        <SpaceForm />
      </div>
    </div>
  );
};

export default SpaceSummit;
