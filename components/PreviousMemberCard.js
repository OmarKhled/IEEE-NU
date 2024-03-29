import React from "react";

export default function PreviousMemberCard({ img, name, txt }) {
  return (
    <div className=" previousMember-card ">
      <div className="p-3 body  d-flex">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <div className="px-3">
          <p className="bold">{name}</p>
          <q>{txt}</q>
        </div>
      </div>
    </div>
  );
}

PreviousMemberCard.defaultProps = {
  img: "/images/prevMember/mohabHafez.png",
  name: "Mohab Hafez",
  txt: `Started my journey in student activities in IEEE as an HR member in
  2018. Then I joined IEEE’s high board as a secretary. Although it
  was so difficult to work during the pandemic, we managed to create a
  competition in which we learned how to Win`,
};
