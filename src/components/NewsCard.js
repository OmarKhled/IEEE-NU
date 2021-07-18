import React from 'react'
import { Card } from 'semantic-ui-react'


const NewsCard = (props) => (
    <>
  <Card className="i"
    image={props.news.url}
    header={props.news.title}
    meta={props.news.date}
    description={props.news.description}
    extra={props.news.extra}
  />
  </>
)

export default NewsCard
