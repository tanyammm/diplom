/* eslint-disable import/no-unresolved */
import React from "react";
import { List, Image } from "antd";
import { Link } from "react-router-dom";
import {
  StyledButtonOrange,
  StyledTitle,
  StyledCard,
  StyledMeta,
} from "../style";
import img from "../../../img/обложка.jpg";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-search.module.css";

const PageSearch = () => {
  const { elements, addShopping } = useRootData((store) => ({
    elements: store.mainStore.elements,
    addShopping: store.mainStore.addShopping,
  }));

  return (
    <div className={css.search}>
      <StyledTitle level={2}>Результаты поиска:</StyledTitle>
      <List
        pagination={{
          pageSize: 20,
          showSizeChanger: false,
          hideOnSinglePage: true,
        }}
        grid={{
          gutter: 86,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        className={css.list}
        dataSource={elements}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <StyledCard key={item.id} hoverable>
              <Link to="/library/book">
                <Image src={img} alt="Обложка книги" preview={false} />
                <StyledMeta title={item.title} description={item.author} />
                <StyledTitle level={5}>{item.price} ₽</StyledTitle>
              </Link>
              <StyledButtonOrange
                type="primary"
                className={css.button}
                onClick={() => {
                  addShopping(item);
                }}
              >
                Добавить
              </StyledButtonOrange>
            </StyledCard>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageSearch;
