import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
const extra = (
  <a>
    <Icon name='location arrow' />
    Giza, 6 October
  </a>
)

const NewsCard = (props) => (
    <>
  <Card
    image={props.news.url}
    header={props.news.title}
    meta={props.news.date}
    description={props.news.description}
    extra={props.news.extra}
  />
  </>
)

export default NewsCard
