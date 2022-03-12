import React, { Fragment } from "react";
import { Col, Container, Row, Card } from "reactstrap";
import { Button } from "semantic-ui-react";

function showContent(e) {
  /* console.log()
  if (e.target.classList.contains("readMore")) {
    e.target.textContent = "Read Less";
    e.target.classList.remove("readMore");
    e.target.classList.add("readless");
    e.target.parentNode.style.width = document.querySelector(".row").offsetWidth + "px"
    window.onresize = function( ) {
      e.target.parentNode.style.width = document.querySelector(".row").offsetWidth + "px"
    }

  } else {
    e.target.classList.add("readMore");
    e.target.classList.remove("readless");
    e.target.textContent = "Read more";
    (e.target.parentNode.style.width = "auto");
    window.onresize = function( ) {
      e.target.parentNode.style.width = "auto"
    } 
  }*/
}
const content = [
  {
    image: require("./../../static/images/membership/digital-library.png"),
    title: "Digital library",
    p: (
      <>
        The IEEE Member Digital Library brought to you via the IEEE Xplore®
        digital library, gives you instant access to all IEEE journal articles,
        magazines, and conference papers—the most essential information in
        technology today.
      </>
    ),
  },
  {
    image: require("./../../static/images/membership/magazine.png"),
    title: "IEEE Spectrum magazine",
    p: (
      <>
        The IEEE Member Digital Library brought to you via the IEEE Xplore®
        digital library, gives you instant access to all IEEE journal articles,
        magazines, and conference papers—the most essential information in
        technology today.
      </>
    ),
  },
  {
    image: require("./../../static/images/membership/ebook.png"),
    title: "E-book classics",
    p: (
      <>
        IEEE members hav e access to 353 eBooks from the IEEE Press collection
        through IEEE Xplore®. The eBook collection spans several of today's
        technologies across 15 different content areas.
      </>
    ),
  },
  {
    image: require("./../../static/images/membership/comic-book.png"),
    title: "IEEE potential magazine",
    p: (
      <>
        Offers high-quality, peer-reviewed online courses on relevant topics.
        The Library delivers hundreds, of course, hours in core and emerging
        technologies, providing professionals, faculty, and students across
        academic institutions.
      </>
    ),
  },
  {
    image: require("./../../static/images/membership/search.png"),
    title: "IEEE Explore",
    p: (
      <>
        One of the most powerful IEEE Xplore resources to discover scientific
        and technical content published by the IEEE and its partners. -The IEEE
        Xplore digital library is a powerful resource for discovering scientific
        and technical content published by the IEEE and its publishing partners.
      </>
    ),
  },
  {
    image: require("./../../static/images/membership/tv-monitor.png"),
    title: "IEEE TV",
    p: (
      <>
        IEEE.tv is an award-winning, Internet-based television network. We
        produce and deliver special-interest programming about technology and
        engineering to benefit the IEEE's members and the general public.
      </>
    ),
  },
  {
    image: require("./../../static/images/membership/offer.png"),
    title: "Discounts for members",
    p: (
      <>
        Being an IEEE student member provides you with the same benefits as
        professional members, such as many discounts on technical resources and
        reduced fees for conference registration, and student discounts on
        society membership, publications, …. etc.
      </>
    ),
  },
];
const Membership = () => {
  return (
    <>
      <div
        className="px-5 membership"
        style={{ maxWidth: "65.125rem", margin: "auto" }}
      >
        <Container>
          <Row>
            {content.map((card) => (
              <Col xs="12" sm="6" md="6" xl="6" className="my-3">
                <Card className="expand-card">
                  <div className="icon">
                    <img src={card.image.default} className="mw-100" />
                  </div>
                  <h3 className="my-3">{card.title}</h3>
                  <p className="text-center hide">{card.p}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Membership;
