import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/context";
import { fetchOneNews } from "../../http/newsAPI";
import "./items.css";

const NewsPage = () => {
  const { theme } = useContext(Context);

  const [news, setNews] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchOneNews(id).then((data) => setNews(data));
  });

  const changeClassName = (classNameComponent) => {
    return `${classNameComponent} ${theme}`;
  };

  return (
    <div>
      <div className="container">
        <h1 className={changeClassName("news-details-title")}>{news.title}</h1>
        <p className={changeClassName("news-details-description")}>
          {news.description}
        </p>
      </div>
    </div>
  );
};

export default NewsPage;
