import { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Alert } from "reactstrap";
import LoadingComponent from "../../Loading";

import {
  updateEvent,
  getSingleEvents,
} from "../../../redux/events/singleEventsActions";

const EditEvents = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const dispatch = useDispatch();
  const { events, loading, alerts } = useSelector((state) => state.singleEvent);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");

  const changeFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    } else {
      setFile("");
      setFilename("");
    }
  };

  useEffect(() => {
    setTimeout(dispatch(getSingleEvents(id)));
  }, []);

  useEffect(() => {
    setTitle(events.title);
    setDate(events.date);
    setPlace(events.place);
  }, [events]);

  const update = () => {
    dispatch(
      updateEvent(id, {
        title,
        date,
        place,
        img: filename !== "" ? `/images/${filename}` : null,
        file: file !== "" ? file : null,
      })
    );
    setTimeout(() => {
      history.push("/admin/dashboard");
    }, 300);
  };

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      <h1>Edit events</h1>

      {loading ? (
        <LoadingComponent />
      ) : alerts.length > 0 ? (
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)
      ) : (
        <div className="mt-3 space-even">
          <Input
            value={title ? title : events.title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            value={date ? date : events.date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            type="textarea"
            height="500"
            value={place ? place : events.place}
            placeholder="Place"
            onChange={(e) => setPlace(e.target.value)}
          />
          <Input type="file" onChange={changeFile} />
          <Button color="primary" onClick={update}>
            Update
          </Button>
        </div>
      )}
    </div>
  );
};

export default withRouter(EditEvents);
