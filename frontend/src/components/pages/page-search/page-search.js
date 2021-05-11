/* eslint-disable import/no-unresolved */
import React from "react";
import { Card, List, Typography } from "antd";
import { Link } from "react-router-dom";
import img from "../../../img/обложка.jpg";
// import card from "../../api/categories.json";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-search.module.css";

const PageSearch = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  const { elements } = useRootData((store) => ({
    elements: store.mainStore.elements,
  }));

  return (
    <div className={css.PageSearch}>
      <Title level={1}>Найдено</Title>
      <List
        grid={{ gutter: 16, column: 2 }}
        className={css.list}
        dataSource={elements}
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

export default PageSearch;
