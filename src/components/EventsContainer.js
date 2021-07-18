import React from 'react'
import { Item } from 'semantic-ui-react'
import EventsCard from './EventsCard'

// Data example
const Events = [
    {
        title: "Event Title",
        date: "1/11/2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        img: "https://react.semantic-ui.com/images/wireframe/image.png",
        url: "https://react.semantic-ui.com/images/wireframe/image.png"
    }
]
const EventsContainer = () => (
    <Item.Group unstackable divided className="events">
    {Events.map(Event => 
        <EventsCard Event={Event} />
    )}
  </Item.Group>
)

export default EventsContainer