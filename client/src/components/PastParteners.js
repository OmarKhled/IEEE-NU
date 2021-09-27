import React from "react";
import Carousel from "react-elastic-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import nile from "../static/images/Parteners/nileuniversty.png";
import research from "../static/images/Parteners/research.png";
import nilepreneurs from "../static/images/Parteners/nilepreneurs.png";
import academy from "../static/images/Parteners/academy.png";
import auc from "../static/images/Parteners/auc.png";
import helwan from "../static/images/Parteners/helwan.jpg";
import nokia from "../static/images/Parteners/nokia.png";
import rim from "../static/images/Parteners/rim.jpeg";
import st from "../static/images/Parteners/st.png";
import tico from "../static/images/Parteners/tico.jfif";
import yard from "../static/images/Parteners/yard.png";

const PastParteners = () => {
  const items = [
    {
      img: nile,
      alt: "Nile Universty",
    },
    {
      img: research,
      alt: "NU Research Center",
    },
    {
      img: nilepreneurs,
      alt: "Nile Preneurs",
    },
    {
      img: nokia,
      alt: "Nokia",
    },
    {
      img: rim,
      alt: "Rim",
    },
    {
      img: st,
      alt: "ST Smart",
    },
    {
      img: tico,
      alt: "Tico",
    },
    {
      img: yard,
      alt: "Freelance Yard",
    },
    {
      img: auc,
      alt: "Auc Robotics",
    },
    {
      img: helwan,
      alt: "IEEE Helwan",
    },
    {
      img: academy,
      alt: "Research of scientific research and technology",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 362, itemsToShow: 2 },
    { width: 707, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === "PREV" ? <FaChevronLeft /> : <FaChevronRight />;
    return (
      <button className="arrow" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };
  return (
    <div className="mb-5">
      <h2>Past parteners</h2>
      <hr />
      <Carousel
        itemPadding={[30, 0]}
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
      >
        {items.map((item) => (
          <div key={item.img} className="partener">
            <img width="100" alt={item.alt} src={item.img}>
              {item.title}
            </img>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default PastParteners;
