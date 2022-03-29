import Link from "next/link";
import React from "react";

const Edition = ({ date, edition, img }) => {
  return (
    <div className="edition">
      <img src={img} alt={`Space Summit ${edition}`} className="edition-img" />
      <div className="body">
        <Link href="#">
          <a className="link">
            <h3 className="title">{edition}</h3>
          </a>
        </Link>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

Edition.defaultProps = {
  date: "01/07/2021",
  edition: "Edition 1",
  img: "/images/edition1.webp",
};

export default Edition;
