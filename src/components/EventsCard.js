import React from 'react'
import { Image, Item, Card } from 'semantic-ui-react'

const EventsCard = (props) => (
    
    <Item>
      <Item.Image src={props.Event.img} />

      <Item.Content>
        <Item.Header as='a'>{props.Event.title}</Item.Header>
        <Item.Meta>{props.Event.date}</Item.Meta>
        <Item.Description>
        {props.Event.description}
          </Item.Description>
        <Item.Extra href={props.Event.url}>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

)

export default EventsCard