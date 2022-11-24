import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const NewsItem = ({ id, title, description }) => {
  const navigate = useNavigate();

  const { theme } = useContext(Context);

  const changeClassName = (classNameComponent) => {
    return `${classNameComponent} ${theme}`;
  };

  return (
    <div className={changeClassName("news")}>
      <div className={changeClassName("title")}>{title}</div>
      <div className={changeClassName("description")}>
        {description.substring(0, 517)}...
      </div>
      <button
        className={changeClassName("btn-read-more")}
        onClick={() => {
          navigate("/" + id);
        }}
      >
        Read more ...
      </button>
    </div>
  );
};

export default NewsItem;
