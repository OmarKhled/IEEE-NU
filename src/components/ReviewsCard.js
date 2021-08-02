import React from "react";
import { Feed } from "semantic-ui-react";
const ReviewsCard = (props) => {
  return (
    <>
      <Feed className="reviews" style={{ height: "100%" }}>
        <Feed.Event className="card2 ">
          <Feed.Label className="mx-auto">
            <img src={props.review.image.default} />
          </Feed.Label>
          <hr
            style={{
              borderLeft: "1px solid #4f4f4f",
              height: "70%",
              margin: "auto 15px",
              display: "flex",
            }}
          />
          <Feed.Content>
            <Feed.Summary>{props.review.name}</Feed.Summary>
            <Feed.Extra text>
              <blockquote>"{props.review.review}"</blockquote>
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </>
  );
};

export default ReviewsCard;
