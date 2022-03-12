import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Alert } from "reactstrap";
import LoadingComponent from "../../Loading";

import { addNews, setAlerts } from "../../../redux/news/singleNewsActions";

const AddNews = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, alerts } = useSelector((state) => state.singleNews);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
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

  const add = () => {
    // console.log(!title || !date || !description || !file || !filename);
    if (!title || !date || !description || !file || !filename) {
      dispatch(setAlerts("Please Fill all the fields"));
    } else {
      dispatch(
        addNews({
          title,
          date,
          description,
          url: filename !== "" ? `/images/${filename}` : null,
          file: file !== "" ? file : null,
        })
      );
      setTimeout(() => {
        history.push("/admin/dashboard");
      }, 300);
    }
  };

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      <h1>Add news</h1>

      {alerts.length > 0 &&
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)}

      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="mt-3 space-even">
          <Input
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            type="textarea"
            height="500"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input type="file" onChange={changeFile} />
          <Button color="primary" onClick={add}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

export default withRouter(AddNews);
