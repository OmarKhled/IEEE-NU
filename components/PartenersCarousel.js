import Carousel from "react-elastic-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PartenersCarousel = ({ items }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 362, itemsToShow: 2 },
    { width: 707, itemsToShow: 3 },
    { width: 1000, itemsToShow: 6 },
  ];
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === "PREV" ? <FaChevronLeft /> : <FaChevronRight />;
    return (
      <button
        className="arrow"
        onClick={onClick}
        disabled={isEdge}
        aria-label="arrow"
      >
        {pointer}
      </button>
    );
  };
  return (
    <>
      <Carousel
        itemPadding={[30, 0]}
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
        // className="mt-4"
      >
        {items.map((item) => (
          <div key={item.img} className={`partener`}>
            <img
              width="100"
              alt={item.alt}
              src={item.img}
              className={`${item.circle ? "circle" : ""}`}
            >
              {item.title}
            </img>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default PartenersCarousel;
