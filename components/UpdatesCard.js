import React from "react";
import Link from "next/link";

const UpdatesCard = ({ img, title, date, link, className }) => {
  return (
    <card className={`updates-card ${className ? className : ""}`}>
      <div className="main-img">
        <img src={img} alt="title" />
      </div>
      <div className="info mt-3">
        <Link href={link}>
          <h6 className="bold">{title}</h6>
        </Link>
        <p>{date}</p>
      </div>
    </card>
  );
};

UpdatesCard.defaultProps = {
  img: "#",
  title: "Title",
  date: "##/##/##",
  link: "#",
};

export default UpdatesCard;
