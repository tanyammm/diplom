/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import {
  ArrowRightOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, Typography } from "antd";
import ReactHtmlParser from "react-html-parser";
import { StyledList, StyledListItem, StyleListItemMeta } from "./styled";
import { StyledSpin } from "../../reusable-components";
import { StyledTitle } from "../../style";
import { ButtonAdd } from "./administrator";
import { useRootData } from "../../../hooks/use-root-data";
import Carousel from "../../reusable-components/carousel";
import css from "./page-news.module.css";

const PageNews = () => {
  const {
    loadingNews,
    setLoadingNews,
    administrator,
    getNews,
    news,
    onClickNewsDelete,
    onClickNewsEdit,
  } = useRootData((store) => ({
    loadingNews: store.mainStore.loadingNews,
    setLoadingNews: store.mainStore.setLoadingNews,
    administrator: store.mainStore.administrator,
    getNews: store.mainStore.getNews,
    news: store.mainStore.news,
    onClickNewsDelete: store.mainStore.onClickNewsDelete,
    onClickNewsEdit: store.mainStore.onClickNewsEdit,
  }));

  const [edit, setEdit] = useState(false);

  const { Paragraph } = Typography;

  useEffect(() => {
    getNews();
  }, []);

  const List = () => {
    return (
      <StyledList
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          hideOnSinglePage: true,
        }}
        dataSource={news}
        renderItem={(item) => (
          <StyledListItem
            key={item._id}
            actions={[
              <>
                <Link
                  key={item._id}
                  to={generatePath("/library/news/:id", { id: item._id })}
                  className={css.farther}
                  data-testid="farther"
                >
                  Читать далее <ArrowRightOutlined />
                </Link>
                {administrator ? (
                  <>
                    <Popconfirm
                      key={item._id}
                      title="Вы уверены, что хотите удалить эту новость? Это действие нельзя отменить"
                      onConfirm={() => {
                        onClickNewsDelete(item._id);
                        setLoadingNews(true);
                      }}
                      okText="Да"
                      cancelText="Нет"
                    >
                      <Button
                        danger
                        type="primary"
                        className={css.button}
                        icon={<DeleteOutlined />}
                      >
                        Удалить
                      </Button>
                    </Popconfirm>
                    <Button
                      type="primary"
                      className={css.button}
                      icon={<EditOutlined />}
                      onClick={() => {
                        setEdit(true);
                      }}
                    >
                      Редактировать
                    </Button>
                  </>
                ) : null}
              </>,
            ]}
            extra={
              item.img ? (
                <img className={css.img} alt="logo" src={item.img} />
              ) : null
            }
          >
            {edit ? (
              <p>ddddddddddddddddddddddddddddddd</p>
            ) : (
              <>
                <StyleListItemMeta title={item.title} />
                <Paragraph
                  className={css.paragraph}
                  ellipsis={{
                    rows: 5,
                  }}
                >
                  {item.text}
                </Paragraph>
              </>
            )}
          </StyledListItem>
        )}
      />
    );
  };

  return (
    <>
      {Carousel}
      <StyledTitle level={2}>Новости</StyledTitle>
      {administrator ? (
        <div className={css.administrator}>
          <ButtonAdd />
        </div>
      ) : null}
      {loadingNews ? <StyledSpin /> : <List />}
    </>
  );
};

export default PageNews;
