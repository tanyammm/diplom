import React from "react";
import { Card, List, Image, Button } from "antd";
import { Link } from "react-router-dom";
import StyledTitle from "../styled";
import img from "../../../img/обложка.jpg";
import card from "../../../api/books.json";
import "antd/dist/antd.css";
import css from "./page-catalog.module.css";

const PageCatalog = () => {
  const { Meta } = Card;

  return (
    <div className={css.catalog}>
      <StyledTitle level={2}>Каталог</StyledTitle>
      <List
        grid={{ gutter: 16, column: 5 }}
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
                <Button className={css.buy}>Купить</Button>
              </Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageCatalog;
