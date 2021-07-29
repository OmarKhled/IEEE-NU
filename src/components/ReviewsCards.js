import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Card } from 'semantic-ui-react'
import Carousel from 'react-elastic-carousel';
import Flex from 'react-elastic-carousel';
import Circle from 'react-elastic-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 362, itemsToShow: 2 },
  { width: 707, itemsToShow: 2 },
]


const items = [
  {
    img: "..\\images\\joe.jpg"
  }
]
const ReviewsCards = (props) => (
  <>
    <h2>Reviews</h2>
    <img src="./../images/joe.jpg"></img>
    <div className="my-5 reviews">
       {items.map(item => (
            <Card className="m-0 my-3 bg-dark py-3">
              <Container>

                <Row>
                  <Col xs="5" className="d-flex w-100">
                    <img src={item.img} className="rounded-circle mw-100 py-3 px-3" />
                  
                  </Col>
                  <Col xs="7" className="d-flex " >
                  <hr style={{ width: "1px", height: "50px", display: "block", padding: "0px", marginTop: "auto" }}></hr>
                    <div className="d-flex pl-2 flex-column">
                        <h4>any text here</h4>
                        <p>Another paragraph here</p>

                    </div>
                  </Col>
                </Row>
              </Container>
            </Card>
        ))}
    </div>

  </>
)

export default ReviewsCards
