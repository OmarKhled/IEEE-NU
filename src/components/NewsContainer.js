import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import NewsCard from './NewsCard'
import { Icon } from 'semantic-ui-react'

const news = [
    {
        url: "https://via.placeholder.com/150/eee/eee",
        title:"News Title",
        date: "12/5/2021",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='location arrow' />
        Giza, 6 October
      </a>
    }
    ,
    {
        url: "https://via.placeholder.com/150/eee/eee",
        title:"News Title",
        date: "12/5/2021",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='location arrow' />
        Giza, 6 October
      </a>
    },
    {
        url: "https://via.placeholder.com/150/eee/eee",
        title:"News Title",
        date: "12/5/2021",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='location arrow' />
        Giza, 6 October
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
          
          <Col xs="12" sm="6" md="4" lg="3" className="d-flex justify-content-center my-4">
            
            <NewsCard news={i}></NewsCard>
          </Col>
      ))}
      </Row>
  </Container>


export default NewsContainer
