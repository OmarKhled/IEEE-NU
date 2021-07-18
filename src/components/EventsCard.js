import React from 'react'
import { Image, Item, Card } from 'semantic-ui-react'

const EventsCard = (props) => (
    
    <Item  className="mx-0 my-3 py-3">
      <Item.Image src={props.Event.img} />

      <Item.Content className="py-3 pr-4">
        <Item.Header href={props.Event.url}  as='a'>{props.Event.title}</Item.Header>
        <Item.Meta>{props.Event.date}</Item.Meta>
        <Item.Description>
        {props.Event.description}
          </Item.Description>
        </Item.Content>
    </Item>

)

export default EventsCard