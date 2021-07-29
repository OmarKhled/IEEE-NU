import React from 'react'
import { Col, Row } from 'reactstrap'
import { Card } from 'semantic-ui-react'


const AboutAbout = (props) => (
  <>
  <div className="my-4">
    <h2 className="my-3">About Us</h2>
    <hr></hr>
    <Row>
      <Col xs="12" sm={{ size: 6, order: 2 }} className="my-2">
        <Card className="i w-100"
          image={"https://picsum.photos/1920/1080"}
        />
      </Col>
      <Col xs="12" sm={{ size: 6, order: 1 }} className="my-2">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut euismod mauris, in placerat felis. Cras id magna sit amet mi porttitor elementum et nec magna. Sed vel ex eleifend, accumsan erat et, gravida ex. Donec et mauris id tellus tempus auctor. Donec nec blandit nibh. Donec enim dui, tincidunt sed lobortis rhoncus, aliquet quis purus. Nunc interdum urna id efficitur semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

      </Col>

    </Row>
  </div>

  </>
)


export default AboutAbout
