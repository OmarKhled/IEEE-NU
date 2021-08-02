import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Item } from "semantic-ui-react";

const EventsCard = (props) => (
  <Item className="mx-0 my-3 py-3">
    <Item.Image src={props.Event.img} />
    <Item.Content className="py-3 pr-4">
      <Item.Header href={props.Event.url} as="a">
        {props.Event.title}
      </Item.Header>
      <Item.Meta className="d-flex align-items-center gap-1 ">
        <FaCalendarAlt />
        {props.Event.date}
      </Item.Meta>
      <Item.Meta className="d-flex align-items-center gap-1">
        <MdLocationOn />
        {props.Event.place}
      </Item.Meta>
    </Item.Content>
  </Item>
);

export default EventsCard;
