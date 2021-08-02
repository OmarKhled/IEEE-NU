import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const NewsCard = (props) => (
  <>
    <Card className="i">
      <Image
        className="aspect-ratio-4-3"
        src={props.news.url}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.news.title}</Card.Header>
        <Card.Meta>
          <span className="date">{props.news.date}</span>
        </Card.Meta>
        <Card.Description>{props.news.description}</Card.Description>
      </Card.Content>
    </Card>
  </>
);

export default NewsCard;
