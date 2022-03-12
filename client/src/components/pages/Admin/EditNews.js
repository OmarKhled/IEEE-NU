import { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Alert } from "reactstrap";
import LoadingComponent from "../../Loading";

import {
  updateNews,
  getSingleNews,
} from "../../../redux/news/singleNewsActions";

const EditNews = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const dispatch = useDispatch();
  const { news, loading, alerts } = useSelector((state) => state.singleNews);

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

  useEffect(() => {
    setTimeout(dispatch(getSingleNews(id)));
  }, []);

  useEffect(() => {
    setTitle(news.title);
    setDate(news.date);
    setDescription(news.description);
  }, [news]);

  const update = () => {
    dispatch(
      updateNews(id, {
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
  };

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      <h1>Edit news</h1>

      {loading ? (
        <LoadingComponent />
      ) : alerts.length > 0 ? (
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)
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
          <Button color="primary" onClick={update}>
            Update
          </Button>
        </div>
      )}
    </div>
  );
};

export default withRouter(EditNews);
