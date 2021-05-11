import React from "react";
import { Link } from "react-router-dom";
import { Typography, List } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import news from "../../../api/news.json";
import css from "./page-news.module.css";

const PageNews = () => {
  const { Title } = Typography;

  return (
    <div>
      <Title level={3}>Новости</Title>
      <List
        className={css.list}
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
        }}
        dataSource={news}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Link
                key="list-loadmore-edit"
                to="/library/services"
                className={css.farther}
              >
                Читать далее <ArrowRightOutlined />
              </Link>,
            ]}
            extra={<img className={css.img} alt="logo" src={item.img} />}
          >
            <List.Item.Meta title={item.title} description={item.description} />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default PageNews;
