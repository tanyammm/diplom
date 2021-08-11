/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import { List, Image } from "antd";
import { Link, generatePath } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {
  StyledButtonOrange,
  StyledTitle,
  StyledButtonShopping,
} from "../../style";
import { StyledCard, StyledMeta } from "./styled";
import { useRootData } from "../../../hooks/use-root-data";
import { StyledSpin } from "..";
import img from "../../../img/cover.png";
import "antd/dist/antd.css";
import css from "./books.module.css";

const Books = (value) => {
  const { addShopping, arrayIndex, loadingBooks, setLoadingShopping } =
    useRootData((store) => ({
      addShopping: store.mainStore.addShopping,
      arrayIndex: store.mainStore.arrayIndex,
      loadingBooks: store.mainStore.loadingBooks,
      setLoadingShopping: store.mainStore.setLoadingShopping,
    }));

  const [array, setArray] = useState();

  const onClick = (item) => {
    setLoadingShopping(true);
    addShopping(item);
    setArray(item._id);
  };

  const ListBook = () => {
    return (
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
        dataSource={value}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <StyledCard key={item._id} hoverable>
              <Link to={generatePath("/library/books/:id", { id: item._id })}>
                <Image src={img} alt="Обложка книги" preview={false} />
                <StyledMeta
                  title={ReactHtmlParser(item.Title)}
                  description={
                    <div className={css.paragraph}>{item.Author}</div>
                  }
                />
                <StyledTitle level={5}>{item.price} ₽</StyledTitle>
              </Link>
              {arrayIndex.includes(item._id) ? (
                <Link to="/library/shopping">
                  <StyledButtonShopping type="primary" className={css.button}>
                    В корзине
                  </StyledButtonShopping>
                </Link>
              ) : (
                <StyledButtonOrange
                  type="primary"
                  className={css.button}
                  onClick={() => {
                    onClick(item);
                  }}
                >
                  Добавить
                </StyledButtonOrange>
              )}
            </StyledCard>
          </List.Item>
        )}
      />
    );
  };

  return <>{loadingBooks ? <StyledSpin /> : <ListBook />}</>;
};

export default Books;
