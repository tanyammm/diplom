import React from "react";
import { Card, List, Typography, Image } from "antd";
import { Link } from "react-router-dom";
import img from "../../img/обложка.jpg";
import card from "../../api/books.json";
import "antd/dist/antd.css";
import css from "./page-three.module.css";

const PageTree = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <div className={css.PageTree}>
      <Title level={1}>*Здесь будет написано название категории*</Title>
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
                <Image
                  src={img}
                  title="Нажмите, чтобы просмотреть обложку в полноэкранном режиме"
                  alt="example"
                />
              }
            >
              <Link to="/library/book">
                <Meta title={item.title} description={item.description} />
              </Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageTree;
