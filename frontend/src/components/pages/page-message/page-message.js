/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageError from "../page-error";
import { StyledTitle, StyledText } from "../../style";
import news from "../../../api/news.json";
import "antd/dist/antd.css";
import css from "./page-message.module.css";

const PageMessage = (value) => {
  const array = [];
  for (let i = 0; i < news.length; i = +1) {
    array.push(news[i].id);
  }

  const { id } = value.match.params;
  let param;

  if (Number.isNaN(id)) {
    param = id;
  } else {
    param = JSON.parse(id);
  }

  const arr = news[param];

  return (
    <>
      {array.includes(param) ? (
        <div className={css.message}>
          <StyledTitle level={2}>{arr.title}</StyledTitle>
          <StyledText className={css.text}>{arr.content}</StyledText>
          <div className={css.img}>
            <Image src={arr.img} title="Увеличить фото" alt="Фото новости" />
          </div>
          <Link to="/library/" className={css.farther}>
            <ArrowLeftOutlined /> Перейти ко всем новостям
          </Link>
        </div>
      ) : (
        <PageError />
      )}
    </>
  );
};

export default PageMessage;
