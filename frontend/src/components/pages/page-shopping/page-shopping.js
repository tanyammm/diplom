/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import {
  Typography,
  Checkbox,
  List,
  Button,
  Empty,
  Popconfirm,
  Affix,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ReactHtmlParser from "react-html-parser";
import { StyledTitle, StyledTextCenter } from "../../style";
import {
  StyledDiv,
  Result,
  Product,
  StyledButton,
  StyledSpin,
} from "../../reusable-components";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/cover.png";
import "antd/dist/antd.css";
import css from "./page-shopping.module.css";

const PageShopping = () => {
  const { Text } = Typography;

  const { basket, deleteShopping, loadingShopping, setLoadingShopping } =
    useRootData((store) => ({
      basket: store.mainStore.basket,
      deleteShopping: store.mainStore.deleteShopping,
      loadingShopping: store.mainStore.loadingShopping,
      setLoadingShopping: store.mainStore.setLoadingShopping,
    }));

  const [array, setArray] = useState();

  const onClick = (item) => {
    setLoadingShopping(true);
    deleteShopping(item);
    setArray(item._id);
  };

  useEffect(() => {
    basket;
  }, []);

  const BasketZero = () => {
    return (
      <Empty
        className={css.empty}
        imageStyle={{
          height: 60,
        }}
        description={
          <StyledTextCenter>
            Ваша корзина пока пуста. Для добавления книг перейдите в каталог.
          </StyledTextCenter>
        }
      >
        <Link to="/diplom/catalog">
          <Button type="primary">Каталог</Button>
        </Link>
      </Empty>
    );
  };

  const Basket = () => {
    return (
      <div className={css.block}>
        <div>
          <Checkbox>Выбрать все</Checkbox>
          <List
            dataSource={basket}
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
              hideOnSinglePage: true,
            }}
            renderItem={(item) => (
              <List.Item
                className={css.list}
                key={item._id}
                actions={[
                  <Popconfirm
                    key={item._id}
                    title="Вы уверены, что хотите удалить этот товар из корзины?"
                    onConfirm={() => onClick(item)}
                    okText="Да"
                    cancelText="Нет"
                  >
                    <Button
                      shape="circle"
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                    />
                  </Popconfirm>,
                ]}
              >
                <Checkbox className={css.checkbox} />
                <List.Item.Meta
                  avatar={
                    <Link
                      to={generatePath("/diplom/books/:id", {
                        id: item._id,
                      })}
                    >
                      <img
                        width={90}
                        src={img}
                        className={css.img}
                        alt="Обложка книги"
                      />
                    </Link>
                  }
                  title={
                    <Link
                      to={generatePath("/diplom/books/:id", {
                        id: item._id,
                      })}
                    >
                      {ReactHtmlParser(item.Title)}
                    </Link>
                  }
                  description={item.Author}
                />
                <Text strong className={css.price}>
                  {item.price} ₽
                </Text>
              </List.Item>
            )}
          />
        </div>
        <Affix offsetTop={120}>
          <StyledDiv>
            <Result />
            <Product />
            <Link to="/diplom/buy" className={css.link}>
              <StyledButton className={css.button} type="primary">
                Оформить заказ
              </StyledButton>
            </Link>
          </StyledDiv>
        </Affix>
      </div>
    );
  };

  return (
    <div className={css.shopping}>
      <StyledTitle level={2}>Корзина</StyledTitle>
      {loadingShopping ? (
        <StyledSpin />
      ) : (
        <>{basket.length === 0 ? <BasketZero /> : <Basket />}</>
      )}
    </div>
  );
};

export default PageShopping;
