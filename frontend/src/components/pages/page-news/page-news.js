import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { StyledList, StyledListItem, StyleListItemMeta } from "./styled";
import { StyledTitle } from "../../style";
import { ButtonAdd } from "../../reusable-components/administrator";
import { useRootData } from "../../../hooks/use-root-data";
import Carousel from "../../reusable-components/carousel";
import news from "../../../api/news.json";
import css from "./page-news.module.css";

const PageNews = () => {
  const { administrator } = useRootData((store) => ({
    administrator: store.mainStore.administrator,
  }));

  return (
    <>
      {Carousel}
      <StyledTitle level={2}>Новости</StyledTitle>
      {administrator ? (
        <div className={css.administrator}>
          <ButtonAdd />
        </div>
      ) : (
        <></>
      )}
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
            key={item.id}
            actions={[
              <Link
                key="list-loadmore-edit"
                to={generatePath("/library/news/:id", { id: item.id })}
                className={css.farther}
                data-testid="farther"
              >
                Читать далее <ArrowRightOutlined />
              </Link>,
            ]}
            extra={<img className={css.img} alt="logo" src={item.img} />}
          >
            <StyleListItemMeta title={item.title} />
            {item.content}
          </StyledListItem>
        )}
      />
    </>
  );
};

export default PageNews;
