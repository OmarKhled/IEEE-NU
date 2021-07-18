import React from 'react'
import { Item } from 'semantic-ui-react'
import EventsCard from './EventsCard'

// Data example
const Events = [
    {
        title: "Event Title",
        date: "1/11/2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        img: "https://picsum.photos/1920/1080",
        url: "https://react.semantic-ui.com/images/wireframe/image.png"
    },
    {
        title: "Event Title",
        date: "1/11/2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        img: "https://picsum.photos/1920/1080",
        url: "https://react.semantic-ui.com/images/wireframe/image.png"
    },
    {
        title: "Event Title",
        date: "1/11/2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        img: "https://picsum.photos/1920/1080",
        url: "https://react.semantic-ui.com/images/wireframe/image.png"
    },
    {
        title: "Event Title",
        date: "1/11/2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna quis nunc porta mollis. Praesent feugiat, libero eget fermentum porta.",
        img: "https://picsum.photos/1920/1080",
        url: "https://react.semantic-ui.com/images/wireframe/image.png"
    }
]
const EventsContainer = () => (
    <>
    <h2 className="mt-3">Events</h2>
    <hr/>
    <Item.Group unstackable divided className="events flex-column">
    {Events.map(Event => 

        <EventsCard Event={Event} />
    )}
  </Item.Group>
  </>
)

export default EventsContainer