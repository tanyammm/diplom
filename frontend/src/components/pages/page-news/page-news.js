/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { StyledList, StyledListItem, StyleListItemMeta } from "./styled";
import { StyledTitle } from "../../style";
import { ButtonAdd } from "./administrator";
import { useRootData } from "../../../hooks/use-root-data";
import Carousel from "../../reusable-components/carousel";
import css from "./page-news.module.css";

const PageNews = () => {
  const { administrator, getNews, news, getNewsId, onClickNewsDelete } =
    useRootData((store) => ({
      administrator: store.mainStore.administrator,
      getNews: store.mainStore.getNews,
      news: store.mainStore.news,
      getNewsId: store.mainStore.getNewsId,
      onClickNewsDelete: store.mainStore.onClickNewsDelete,
    }));

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {Carousel}
      <StyledTitle level={2}>Новости</StyledTitle>
      {administrator ? (
        <div className={css.administrator}>
          <ButtonAdd />
        </div>
      ) : null}
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
                  key="list-loadmore-edit"
                  to={generatePath("/library/news/:id", { id: item._id })}
                  className={css.farther}
                  data-testid="farther"
                  onClick={() => {
                    getNewsId(item._id);
                  }}
                >
                  Читать далее <ArrowRightOutlined />
                </Link>
                {administrator ? (
                  <Popconfirm
                    key={item._id}
                    title="Вы уверены, что хотите удалить эту новость? Это действие нельзя отменить"
                    onConfirm={() => onClickNewsDelete(item._id)}
                    okText="Да"
                    cancelText="Нет"
                  >
                    <Button danger type="primary">
                      Удалить
                    </Button>
                  </Popconfirm>
                ) : null}
              </>,
            ]}
            extra={
              item.img ? (
                <img className={css.img} alt="logo" src={item.img} />
              ) : null
            }
          >
            <StyleListItemMeta title={item.title} />
            <div className={css.text}>{item.text}</div>
          </StyledListItem>
        )}
      />
    </>
  );
};

export default PageNews;
