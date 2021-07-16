import { Col, Container, Jumbotron, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
const Footer = () => (
    <>
      <Jumbotron
        className="mb-0 footer"
        style={{ paddingBottom: "30px", paddingTop: "40px"}}
      >
        <Container>
          <div >
            <div className="justify-content-center text-center" >
              <ul className="list-unstyled list-inline-item">
                <li className="list-inline-item">
                  <NavLink to="/home">Home</NavLink> |
                </li>
                <li className="list-inline-item">
                  <NavLink to="/aboutus">About Us</NavLink> | 
                </li>
                <li className="list-inline-item">
                  <NavLink to="/">Technical Lounge</NavLink> |
                </li>
                <li className="list-inline-item">
                  <NavLink to="/">Academy</NavLink> |
                </li>
                <li className="list-inline-item">
                  <NavLink to="/">Events</NavLink> |
                </li>
                <li className="list-inline-item">
                  <NavLink to="/">Members</NavLink> |
                </li>
              </ul>
            </div>
          </div>
            <Row>
            <Col xs={{ size: 12 }} sm={{ size: 6 }}>
              <h5>Contact Us</h5>
              
              <i className="phone icon"></i>: +852 1234 5678
                <br />
                <i className="fax icon"></i>: +852 8765 4321
                <br />
                <i className="envelope icon"></i>:{" "}
                <Link to="mailto:confusion@food.net">confusion@food.net</Link>
             
            </Col>
            <Col
              xs={{ size: 12 }}
              sm={{ size: 6 }}
              className="align-self-center"
            >
              <iframe title="Geolocation" className="ml-auto mt-2" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAyzbtDMm8MS1VLeeEeA_4MVpYAxr0l8Oc&amp;q=30.0118469,30.9857909&amp;zoom=18&amp;maptype=satellite" frameBorder="0" width="100%" height="100%"></iframe>
            </Col>
            </Row>
            <div className="text-center">
                <Link
                  className="btn btn-social-icon btn-google"
                  to="http://google.com/+"
                >
                  <i className="google icon"></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-facebook"
                  to="http://www.facebook.com/profile.php?id="
                >
                  <i className="facebook f icon"></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-linkedin"
                  to="http://www.linkedin.com/in/"
                >
                  <i className="linkedin icon"></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-twitter"
                  to="http://twitter.com/"
                >
                  <i className="twitter icon"></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-google"
                  to="http://youtube.com/"
                >
                  <i className="youtube icon"></i>
                </Link>
                <Link className="btn btn-social-icon" to="mailto:">
                <i className="envelope icon"></i>
                </Link>
              </div>
        </Container>
      </Jumbotron>
          <div className="display-flex justify-content-center copyright">
            <Container>
            <div className="">
              <p className="m-0 py-2 text-center">
                © Copyright 2020 IEEE NU SB
              </p>
            </div>
            </Container>
          </div>
    </>
)
export default Footer