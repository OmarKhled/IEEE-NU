import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const NewsCard = (props) => (
    <>
  <Card
  href= {props.news.link}
    image={props.news.url}
    header={props.news.title}
    meta={props.news.date}
    description={props.news.description}
    extra={props.news.extra}
  />
  </>
)

export default NewsCard
