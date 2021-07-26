import React from "react";
import NewsletterMessage from "./NewsletterMessage";
import Character from "./Character";

const NewsletterPop = ({ className, remove }) => {
  return (
    <div className={className}>
      <Character />
      <NewsletterMessage remove={remove} />
    </div>
  );
};

export default NewsletterPop;
