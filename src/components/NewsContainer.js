import React from 'react'
import { Row, Col } from 'reactstrap'
import NewsCard from './NewsCard'
import { Icon } from 'semantic-ui-react'

const news = [
    {
        link: "https://picsum.photos/1920/1080",
        url: "https://picsum.photos/1920/1080",
        title:"News Title",
        date: "12/5/2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='user' as="i" />
        Ahmed Hamdy
      </a>
    }
    ,
    {
        link: "https://picsum.photos/1920/1080",
        url: "https://picsum.photos/1920/1080",
        title:"News Title",
        date: "12/5/2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        extra: <a>
        <Icon name='user' as="i" />
        Ahmed Hamdy
      </a>
    },
    {
      link: "https://picsum.photos/1920/1080",
      url: "https://picsum.photos/1920/1080",
      title:"News Title",
      date: "12/5/2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
      extra: <a>
      <Icon name='user' as="i" />
      Ahmed Hamdy
    </a>
  }
]
const NewsContainer = () => 
  <div className="news mt-5">
      <h2>News</h2>
      <hr></hr>
      <Row>
      {news.map((i, index) => (
          <Col key={index} xs="12" sm="6" md="4" lg="4" className="mw-80 d-flex justify-content-center my-4">
            <a className="d-flex" href="#">
                <NewsCard news={i}></NewsCard>
            </a>
          </Col>
      ))}
      </Row>
  </div>


export default NewsContainer
