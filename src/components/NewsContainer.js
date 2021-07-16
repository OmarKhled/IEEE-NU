import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import NewsCard from './NewsCard'
import { Icon } from 'semantic-ui-react'

const news = [
    {
        link: "https://via.placeholder.com/150/eee/eee",
        url: "https://via.placeholder.com/150/eee/eee",
        title:"News Title",
        date: "12/5/2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='user' />
        Ahmed Hamdy
      </a>
    }
    ,
    {
        link: "https://via.placeholder.com/150/eee/eee",
        url: "https://via.placeholder.com/150/eee/eee",
        title:"News Title",
        date: "12/5/2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='user' />
        Ahmed Hamdy
      </a>
    },
    {
        link: "https://via.placeholder.com/150/eee/eee",
        url: "https://via.placeholder.com/150/eee/eee",
        title:"News Title",
        date: "12/5/2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='user' />
        Ahmed Hamdy
      </a>
    }
]
const NewsContainer = () => 
  <Container className="news">
      <h2 className="h1 text-white">
          News
      </h2>
      <hr className="bg-white"></hr>
      <Row>
      {news.map(i => (
          
          <Col xs="12" sm="6" md="4" lg="3" className="mw-80 d-flex justify-content-center my-4">
            <a className="d-flex" href="#">
                <NewsCard news={i}></NewsCard>
            </a>
          </Col>
      ))}
      </Row>
  </Container>


export default NewsContainer
