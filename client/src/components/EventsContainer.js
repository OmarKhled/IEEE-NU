import { useEffect } from "react";
import { Item } from "semantic-ui-react";
import EventsCard from "./EventsCard";
import LoadingComponent from "./Loading";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/events/eventsActions";

const EventsContainer = ({ full }) => {
  const dispatch = useDispatch();
  const { events, loading, alerts } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEvents());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2 className="mt-3">Events</h2>
      <hr />
      {loading ? (
        <LoadingComponent />
      ) : alerts.length > 0 ? (
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)
      ) : (
        <>
          <Item.Group unstackable divided className="events flex-column">
            {events.map((Event, index) =>
              full ? (
                <EventsCard key={Event.title} Event={Event} />
              ) : (
                index <= 2 && <EventsCard key={Event.title} Event={Event} />
              )
            )}
          </Item.Group>
          {!full && events.length > 3 && (
            <div className="d-flex justify-conent-center">
              <Link
                style={{ width: "fit-content" }}
                to="/events"
                className="m-auto btn-subscribe"
              >
                See All News
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EventsContainer;
