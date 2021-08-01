import React from "react";
import { Item } from "semantic-ui-react";
import EventsCard from "./EventsCard";

import poster from "../static/images/Space.jpg";
import connection from "../static/images/Events/connection.jpg";
import sos from "../static/images/Events/sos.jpg";

// Data example
const Events = [
  {
    title: "Egyptian Space Summit",
    date: "2/08/2021",
    place: "Nile Universty",
    img: poster,
  },
  {
    title: "Connection",
    date: "16/5/2020",
    place: "Online",
    img: connection,
  },
  {
    title: "S.O.S V3 | The Competition ",
    date: "24/2/2020",
    place: "Nile Universty",
    img: sos,
  },
];
const EventsContainer = () => (
  <>
    <h2 className="mt-3">Events</h2>
    <hr />
    <Item.Group unstackable divided className="events flex-column">
      {Events.map((Event) => (
        <EventsCard Event={Event} />
      ))}
    </Item.Group>
  </>
);

export default EventsContainer;
