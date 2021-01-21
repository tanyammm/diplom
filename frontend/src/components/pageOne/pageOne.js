import React from "react";
import { List } from "antd";
import news from "./news.json";
import css from "./pageOne.module.css";

const PageOne = () => {
  return (
    <List
      className={css.PageOne}
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 10,
        showSizeChanger: false,
        style: { textAlign: "center" },
      }}
      dataSource={news}
      renderItem={(item) => (
        <List.Item className={css.list} key={item.title}>
          <List.Item.Meta title={item.title} description={item.description} />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default PageOne;
