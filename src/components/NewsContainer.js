import React from "react";
import { Row, Col } from "reactstrap";
import NewsCard from "./NewsCard";
import { Icon } from "semantic-ui-react";

import smart from "../static/images/smart.jpg";
import slogan from "../static/images/vis.png";
import store from "../static/images/store.png";

const news = [
  {
    url: slogan,
    title: "IEEE NU Site Launch",
    date: "12/5/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
  },
  {
    url: smart,
    title: "Partner ship with SMART",
    date: "12/5/2021",
    description:
      "Robotics is one of the technologies that we will depend on in the future as technology evolves every day, so it's crucial to develop our skills to become essential in our lives as it Invades our world now. We are pleased to announce our partnership with SMART.",
  },
  {
    url: store,
    title: "IEEE NU Store Launch",
    date: "12/5/2021",
    description:
      "𝑰𝑬𝑬𝑬-𝑵𝑼 𝑺𝒕𝒐𝒓𝒆 𝒊𝒔 𝒏𝒐𝒘 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆! \n The store is founded and sponsored by Nile University's Student Union, as its ultimate purpose is to afford all the essential tools and materials for NU students. ",
  },
];
const NewsContainer = () => (
  <div className="news mt-5">
    <h2>News</h2>
    <hr></hr>
    <Row>
      {news.map((i, index) => (
        <Col
          key={index}
          xs="12"
          sm="6"
          md="4"
          lg="4"
          className="mw-80 d-flex justify-content-center my-4"
        >
          <a className="d-flex" href="#">
            <NewsCard news={i}></NewsCard>
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

export default NewsContainer;
