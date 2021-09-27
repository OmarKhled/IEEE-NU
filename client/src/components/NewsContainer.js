import { useEffect } from "react";
import { Row, Col, Alert } from "reactstrap";
import NewsCard from "./NewsCard";
import LoadingComponent from "./Loading";

import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/news/newsActions";
import { Link } from "react-router-dom";

const NewsContainer = ({ full }) => {
  const dispatch = useDispatch();
  let { news, loading, alerts } = useSelector((state) => state.news);
  news = news.slice(0, 4);

  // eslint-disable-next-line
  useEffect(async () => {
    dispatch(getNews());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="news mt-5">
      <h2>News</h2>
      <hr></hr>
      {alerts.length > 0 &&
        alerts.map((alert) => <Alert color="danger">{alert}</Alert>)}
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Row>
            {news.map((i, index) =>
              full ? (
                <Col
                  key={index}
                  xs="12"
                  sm="6"
                  md="4"
                  lg="4"
                  className="mw-80 d-flex justify-content-center my-4 hover-opacity"
                >
                  <NewsCard news={i}></NewsCard>
                </Col>
              ) : (
                index <= 2 && (
                  <Col
                    key={index}
                    xs="12"
                    sm="6"
                    md="4"
                    lg="4"
                    className="mw-80 d-flex justify-content-center my-4 hover-opacity"
                  >
                    <NewsCard news={i}></NewsCard>
                  </Col>
                )
              )
            )}
          </Row>
          {!full && news.length > 3 && (
            <div className="d-flex justify-conent-center">
              <Link
                style={{ width: "fit-content" }}
                to="/news"
                className="m-auto btn-subscribe"
              >
                See All News
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsContainer;
