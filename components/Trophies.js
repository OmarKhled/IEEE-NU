import React from "react";

const Trophies = ({ place, id, className }) => {
  return (
    <>
      {place == 3 ? (
        <div
          id={id}
          className={`text-center col-12 col-md-4 mt-5 ${className}`}
        >
          <img
            className="
      mx-auto"
            width={"80"}
            src="/illustrations/bronze.webp"
            alt={"Bornze Trophy"}
          />
          <h5>3rd Place</h5>
          <h6>1000 EGP</h6>
        </div>
      ) : place == 1 ? (
        <div
          id={id}
          className={`text-center col-12 col-md-4 mt-5 ${className}`}
        >
          <img
            className="mx-auto"
            width={"260"}
            src="/illustrations/gold.webp"
            alt={"Gold Trophy"}
          />
          <h3>1st Place</h3>
          <h4>5000 EGP</h4>
        </div>
      ) : place == 2 ? (
        <div
          id={id}
          className={`text-center col-12 col-md-4 mt-5 ${className}`}
        >
          <img
            className="mx-auto"
            width={"120"}
            src="/illustrations/silver.webp"
            alt={"Silver Trophy"}
          />
          <h4>2nd Place</h4>
          <h5>3000 EGP</h5>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

Trophies.defaultProps = {
  img: "/illustrations/gold.webp",
  width: "200",
  place: "1",
  id: "",
  className: "",
};

export default Trophies;
