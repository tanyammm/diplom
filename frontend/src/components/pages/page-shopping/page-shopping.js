/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable promise/param-names */
/* eslint-disable promise/avoid-new */
import React, { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { Typography, Checkbox, List, Button, Empty, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { StyledTitle, StyledTextCenter } from "../../style";
import {
  StyledDiv,
  Result,
  Product,
  StyledButton,
  StyledSpin,
} from "../../reusable-components";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/обложка.jpg";
import "antd/dist/antd.css";
import css from "./page-shopping.module.css";

const PageShopping = () => {
  const { Text } = Typography;

  const { basket, deleteShopping } = useRootData((store) => ({
    basket: store.mainStore.basket,
    deleteShopping: store.mainStore.deleteShopping,
  }));

  const [loading, setLoading] = useState(true);
  const [array, setArray] = useState();

  const onClick = (item) => {
    deleteShopping(item);
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
    <div className={css.shopping}>
      <StyledTitle level={2}>Корзина</StyledTitle>
      {!loading ? (
        <>
          {basket.length === 0 ? (
            <Empty
              className={css.empty}
              imageStyle={{
                height: 60,
              }}
              description={
                <StyledTextCenter>
                  Ваша корзина пока пуста. Для добавления книг перейдите в
                  каталог.
                </StyledTextCenter>
              }
            >
              <Link to="/library/catalog">
                <Button type="primary">Каталог</Button>
              </Link>
            </Empty>
          ) : (
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
                      key={item.id}
                      actions={[
                        <Popconfirm
                          key={item.id}
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
                            to={generatePath("/library/book/:id", {
                              id: item.id,
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
                            to={generatePath("/library/book/:id", {
                              id: item.id,
                            })}
                          >
                            {item.title}
                          </Link>
                        }
                        description={item.author}
                      />
                      <Text strong className={css.price}>
                        {item.price} ₽
                      </Text>
                    </List.Item>
                  )}
                />
              </div>
              <StyledDiv>
                <Result />
                <Product />
                <Link to="/library/buy" className={css.link}>
                  <StyledButton className={css.button} type="primary">
                    Оформить заказ
                  </StyledButton>
                </Link>
              </StyledDiv>
            </div>
          )}
        </>
      ) : (
        <StyledSpin />
      )}
    </div>
  );
};

export default PageShopping;
