import React from "react";
import { Card, List, Typography } from "antd";
import { Link } from "react-router-dom";
import img from "../../img/libraries.png";
import card from "../../api/categories.json";
import "antd/dist/antd.css";
import css from "./page-two.module.css";

const PageTwo = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <div className={css.PageTwo}>
      <Title level={1}>Каталог книг</Title>
      <List
        grid={{ gutter: 16, column: 5 }}
        className={css.list}
        dataSource={card}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <Link to="/library/books">
              <Card
                key={item.title}
                className={css.card}
                hoverable
                cover={<img alt="example" src={img} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageTwo;
