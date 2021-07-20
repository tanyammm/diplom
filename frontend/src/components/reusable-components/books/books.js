/* eslint-disable promise/avoid-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable promise/param-names */
import React, { useEffect, useState } from "react";
import { List, Image } from "antd";
import { Link, generatePath } from "react-router-dom";
import {
  StyledButtonOrange,
  StyledTitle,
  StyledButtonShopping,
} from "../../style";
import { StyledCard, StyledMeta } from "./styled";
import { useRootData } from "../../../hooks/use-root-data";
import { StyledSpin } from "..";
import img from "../../../img/обложка.jpg";
import "antd/dist/antd.css";
import css from "./books.module.css";

const Books = (value) => {
  const { addShopping, arrayIndex } = useRootData((store) => ({
    addShopping: store.mainStore.addShopping,
    arrayIndex: store.mainStore.arrayIndex,
  }));

  const [array, setArray] = useState();
  const [loading, setLoading] = useState(true);

  const onClick = (item) => {
    addShopping(item);
    setArray(item);
  };

  useEffect(() => {
    setArray();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  return (
    <>
      {!loading ? (
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
            <List.Item key={item.id}>
              <StyledCard key={item.id} hoverable>
                <Link to={generatePath("/library/book/:id", { id: item.id })}>
                  <Image src={img} alt="Обложка книги" preview={false} />
                  <StyledMeta title={item.title} description={item.author} />
                  <StyledTitle level={5}>{item.price} ₽</StyledTitle>
                </Link>
                {arrayIndex.includes(item.id) ? (
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
      ) : (
        <StyledSpin />
      )}
    </>
  );
};

export default Books;
