import React, { useContext } from "react";
import { Context } from "../../context/context";
import NewsItem from "./NewsItem";
import "./items.css";

const NewsList = () => {
  const { news } = useContext(Context);

  return (
    <div className="items">
      <div className="container">
        {news.map((i) => (
          <NewsItem
            key={i.id}
            id={i.id}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
