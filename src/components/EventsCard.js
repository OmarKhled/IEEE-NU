import React from 'react'
import { Image, Item, Card } from 'semantic-ui-react'

const EventsCard = (props) => (
    
    <Item href={props.Event.url} className="mx-0 my-3">
      <Item.Image href={props.Event.url} src={props.Event.img} />

      <Item.Content className="py-3 pr-4">
        <Item.Header as='a'>{props.Event.title}</Item.Header>
        <Item.Meta>{props.Event.date}</Item.Meta>
        <Item.Description>
        {props.Event.description}
          </Item.Description>
        </Item.Content>
    </Item>

)

export default EventsCard