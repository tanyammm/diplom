/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from "moment";
import PageError from "../page-error";
import { useRootData } from "../../../hooks/use-root-data";
import { StyledTitle, StyledText } from "../../style";
import { StyledSpin } from "../../reusable-components";
import "antd/dist/antd.css";
import css from "./page-message.module.css";

const PageMessage = (value) => {
  const { loadingNewsId, getNewsId, setLoadingNewsId, newsId, getErrorNewsId } =
    useRootData((store) => ({
      loadingNewsId: store.mainStore.loadingNewsId,
      getNewsId: store.mainStore.getNewsId,
      setLoadingNewsId: store.mainStore.setLoadingNewsId,
      newsId: store.mainStore.newsId,
      getErrorNewsId: store.mainStore.getErrorNewsId,
    }));

  const { id } = value.match.params;

  useEffect(() => {
    setLoadingNewsId(true);
    getNewsId(id);
  }, []);

  return (
    <>
      {getErrorNewsId ? (
        <PageError />
      ) : (
        <>
          {loadingNewsId ? (
            <div className={css.spin}>
              <StyledSpin />
            </div>
          ) : (
            <div className={css.message}>
              <newsIdowLeftOutlined />
              <StyledTitle level={2}>{newsId.title}</StyledTitle>
              <StyledText className={css.text}>{newsId.text}</StyledText>
              {newsId.img ? (
                <div className={css.img}>
                  <Image
                    src={newsId.img}
                    title="Увеличить фото"
                    alt="Фото новости"
                  />
                </div>
              ) : null}
              <StyledText className={css.text}>
                Дата публикации: {moment(newsId.date).format("Do MMMM YYYY")}
              </StyledText>
              <Link to="/diplom/" className={css.farther}>
                <ArrowLeftOutlined /> Перейти ко всем новостям
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PageMessage;
