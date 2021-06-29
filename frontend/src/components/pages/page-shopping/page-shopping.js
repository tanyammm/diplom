/* eslint-disable no-shadow */
/* eslint-disable promise/param-names */
/* eslint-disable promise/avoid-new */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Checkbox, List, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { StyledTitle } from "../../style";
import {
  StyledDiv,
  Result,
  Product,
  StyledButton,
  StyledSpin,
} from "../../components";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/обложка.jpg";
import "antd/dist/antd.css";
import css from "./page-shopping.module.css";

const PageShopping = () => {
  const { Text } = Typography;

  const { basket } = useRootData((store) => ({
    basket: store.mainStore.basket,
  }));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  return (
    <div className={css.shopping}>
      <StyledTitle level={2}>Корзина</StyledTitle>
      {!loading ? (
        <div className={css.block}>
          <div>
            <Checkbox>Выбрать все</Checkbox>
            <List
              className={css.list}
              dataSource={basket}
              pagination={{
                pageSize: 10,
                showSizeChanger: false,
                hideOnSinglePage: true,
              }}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button key={item.id} type="text">
                      <CloseOutlined />
                    </Button>,
                  ]}
                >
                  <Checkbox />
                  <List.Item.Meta
                    avatar={
                      <Link to="/library/book">
                        <img
                          width={90}
                          src={img}
                          className={css.img}
                          alt="Обложка книги"
                        />
                      </Link>
                    }
                    title={<Link to="/library/book">{item.title}</Link>}
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
      ) : (
        <StyledSpin />
      )}
    </div>
  );
};

export default PageShopping;
