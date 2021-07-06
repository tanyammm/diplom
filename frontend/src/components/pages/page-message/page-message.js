/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
import React from "react";
import PageDevelopment from "../page-development";
import PageError from "../page-error";
import news from "../../../api/news.json";
import "antd/dist/antd.css";

const PageMessage = (value) => {
  const array = [];
  for (let i = 0; i < news.length; i++) {
    array.push(news[i].id);
  }
  const { id } = value.match.params;

  let param;

  if (isNaN(id)) {
    param = id;
  } else {
    param = JSON.parse(id);
  }

  return <>{array.includes(param) ? <PageDevelopment /> : <PageError />};</>;
};

export default PageMessage;
