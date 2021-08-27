import React from "react";
import EventsContainer from "../EventsContainer";

function toggleCalendar() {
  if (document.querySelector(".hide-calendar")) {
    document.querySelector(".hide-calendar").className = "show-calendar";
    document.querySelector(".toggle-calendar").textContent = "Hide Calendar";
  } else {
    document.querySelector(".show-calendar").className = "hide-calendar";
    document.querySelector(".toggle-calendar").textContent = "Show Calendar";
  }
}
const Events = () => (
  <>
    <div className="px-5" style={{ maxWidth: "65.125rem", margin: "auto" }}>
      <div className="d-flex">
        <h2>
          Events
        </h2>
        <button
          onClick={toggleCalendar}
          className="toggle-calendar ml-auto btn-1 w-auto px-2 py-1 d-inline-block float-right rounded mt-auto"
        >
          View Calendar
        </button>
      </div>
      <hr />
      <div className="calendar">
        <iframe
          className="hide-calendar"
          style={{ width: "100%", height: "550px" }}
          src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/2ddee45b-6a53-4ffe-900f-53894608dca8/cid-20DD564E034F7922/index.html"
        ></iframe>
      </div>
      <EventsContainer full />
    </div>
  </>
);

export default Events;
