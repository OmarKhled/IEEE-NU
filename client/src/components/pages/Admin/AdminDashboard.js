import { useEffect } from "react";
import { Button, ListGroup, ListGroupItem, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../redux/users/usersActions";
import { getNews } from "../../../redux/news/newsActions";
import { deleteNews } from "../../../redux/news/singleNewsActions";
import { getEvents } from "../../../redux/events/eventsActions";
import { deleteEvents } from "../../../redux/events/singleEventsActions";

import LoadingComponent from "../../Loading";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { news, loading: newsLoading } = useSelector((state) => state.news);
  const { events, loading: eventsLoading } = useSelector(
    (state) => state.events
  );

  const logout = () => {
    dispatch(logOutUser);
  };
  const delNews = (id) => {
    console.log(id);
    dispatch(deleteNews(id));
    setTimeout(() => {
      dispatch(getNews());
    }, 500);
  };
  const delEvent = (id) => {
    console.log(id);
    dispatch(deleteEvents(id));
    setTimeout(() => {
      dispatch(getEvents());
    }, 500);
  };

  useEffect(() => {
    dispatch(getNews());
    dispatch(getEvents());
  }, []);

  return (
    <div
      className="px-5"
      style={{ minHeight: "70vh", maxWidth: "65.125rem", margin: "auto" }}
    >
      <div>
        <Alert color="primary">
          <ul style={{ margin: "0" }}>
            {[
              "This admin dashboard is still under development and may have some bugs",
              "If you faced any error just refresh the tab and if required logout and login again and all will be good",
              "In case of any bug or error discovery please report it",
              "Please watch the name of any photo you upload as it shouldn't have any spaces in its name, otherwise photo will be ignored and won't be loaded",
            ].map((alert) => (
              <li style={{ margin: "0" }}>{alert}</li>
            ))}
          </ul>
        </Alert>
      </div>
      <div className="d-flex justify-content-between">
        <h2>Hello, {user.name}</h2>
        <Button onClick={logout} color="danger">
          Logout
        </Button>
      </div>
      <div className="mt-4 space-even">
        <div>
          <h3>News</h3>
          <hr />
          {newsLoading ? (
            <LoadingComponent />
          ) : (
            <>
              <ListGroup>
                {news.map((item) => (
                  <ListGroupItem
                    key={item._id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <p>{item.title}</p>
                    <div className="d-flex gap-2">
                      <Link
                        to={`/admin/edit/news/${item._id}`}
                        className="btn btn-info"
                      >
                        <MdEdit />
                      </Link>
                      <Button onClick={() => delNews(item._id)} color="danger">
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <Link to={`/admin/add/news`} className="btn btn-info mt-2">
                <FaPlus />
              </Link>
            </>
          )}
        </div>
        <div>
          <h3>Events</h3>
          <hr />
          {newsLoading ? (
            <LoadingComponent />
          ) : (
            <>
              <ListGroup>
                {events.map((item) => (
                  <ListGroupItem
                    key={item._id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <p>{item.title}</p>
                    <div className="d-flex gap-2">
                      <Link
                        to={`/admin/edit/events/${item._id}`}
                        className="btn btn-info"
                      >
                        <MdEdit />
                      </Link>
                      <Button onClick={() => delEvent(item._id)} color="danger">
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <Link to={`/admin/add/events`} className="btn btn-info mt-2">
                <FaPlus />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
