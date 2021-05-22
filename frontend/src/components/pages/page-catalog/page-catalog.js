import React from "react";
import { Card, List, Image } from "antd";
import { Link } from "react-router-dom";
import StyledButton from "./styled";
import StyledTitle from "../styled";
import { useRootData } from "../../../hooks/use-root-data";
import img from "../../../img/обложка.jpg";
import card from "../../../api/books.json";
import "antd/dist/antd.css";
import css from "./page-catalog.module.css";

const PageCatalog = () => {
  const { Meta } = Card;

  const { selectBookCategory } = useRootData((store) => ({
    selectBookCategory: store.mainStore.selectBookCategory,
  }));

  return (
    <div className={css.catalog}>
      <StyledTitle level={2}>{selectBookCategory}</StyledTitle>
      <List
        grid={{ gutter: 16, column: 4 }}
        className={css.list}
        dataSource={card}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <Card
              key={item.title}
              className={css.card}
              hoverable
              cover={
                <Image src={img} title="Увеличить обложку" alt="example" />
              }
            >
              <Meta title={item.title} description={item.description} />
              <Link to="/library/book">
                <StyledButton type="primary">Купить</StyledButton>
              </Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageCatalog;
