/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Image } from "antd";
import { newsIdowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageError from "../page-error";
import { useRootData } from "../../../hooks/use-root-data";
import { StyledTitle, StyledText } from "../../style";
import "antd/dist/antd.css";
import css from "./page-message.module.css";

const PageMessage = (value) => {
  const { newsId, news } = useRootData((store) => ({
    newsId: store.mainStore.newsId,
    news: store.mainStore.news,
  }));

  const { id } = value.match.params;

  return (
    <>
      {/* {news.includes(id) ? ( */}
      <div className={css.message}>
        <StyledTitle level={2}>{newsId.title}</StyledTitle>
        <StyledText className={css.text}>{newsId.text}</StyledText>
        <div className={css.img}>
          <Image src={newsId.img} title="Увеличить фото" alt="Фото новости" />
        </div>
        <StyledText className={css.text}>
          Время публикации: {newsId.date}
        </StyledText>
        <Link to="/library/" className={css.farther}>
          <newsIdowLeftOutlined /> Перейти ко всем новостям
        </Link>
      </div>
      {/* ) : (
        <PageError />
      )} */}
    </>
  );
};

export default PageMessage;
