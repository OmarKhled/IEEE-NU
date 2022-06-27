import React from "react";

const UpdatesCard = ({ img, title, date, link, className }) => {
  return (
    <div className={`updates-card ${className ? className : ""}`}>
      <div className="main-img">
        <img src={img} alt={title} className="img front" layout={"fixed"} />
        <img src={img} alt={title} className="img back" layout={"fixed"} />
      </div>
      <div className="info mt-3">
        <h6 className="bold">{title}</h6>
        <p>{date}</p>
      </div>
    </div>
  );
};

UpdatesCard.defaultProps = {
  img: "#",
  title: "Title",
  date: "##/##/##",
  link: "#",
  key: "",
};

export default UpdatesCard;
