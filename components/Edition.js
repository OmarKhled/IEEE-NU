import Link from "next/link";
import React from "react";

const Edition = ({ date, edition, img, url }) => {
  return (
    <div className="edition">
      <Link href={url}>
        <a>
          <img
            src={img}
            alt={`Space Summit ${edition}`}
            className="edition-img"
          />
          <div className="body">
            <h3 className="title">{edition}</h3>

            <p className="date">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

Edition.defaultProps = {
  date: "01/07/2021",
  edition: "Edition 1",
  img: "/images/edition1.webp",
  url: "/spacesummit/editions/1",
};

export default Edition;
