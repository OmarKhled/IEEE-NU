import React from "react";
import { Card } from "semantic-ui-react";

const NewsCard = (props) => (
  <>
    <Card className="i hover-opacity" as="div">
      <div className="responsive-item-4-3">
        <img className="responsive-item" alt="thumbnail" src={props.news.url} />
      </div>
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
