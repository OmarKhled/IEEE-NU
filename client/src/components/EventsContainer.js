import { useEffect } from "react";
import { Item } from "semantic-ui-react";
import EventsCard from "./EventsCard";
import LoadingComponent from "./Loading";

import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/events/eventsActions";

const EventsContainer = () => {
  const dispatch = useDispatch();
  const { events, loading } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEvents());
  }, []);
  return (
    <>
      <h2 className="mt-3">Events</h2>
      <hr />
      {loading ? (
        <LoadingComponent />
      ) : (
        <Item.Group unstackable divided className="events flex-column">
          {events.map((Event) => (
            <EventsCard Event={Event} />
          ))}
        </Item.Group>
      )}
    </>
  );
};

export default EventsContainer;
