import React from "react";
import Link from "next/link";

const UpdatesCard = ({ img, title, date, link }) => {
  return (
    <card className="updates-card">
      <div className="maing-img">
        <img src={img} />
      </div>
      <div className="info">
        <Link href={link}>
          <h4>{title}</h4>
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
