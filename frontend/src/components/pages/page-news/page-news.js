import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { StyledList, StyledListItem, StyleListItemMeta } from "./styled";
import StyledTitle from "../styled";
import Imgs from "./imgs";
import news from "../../../api/news.json";
import css from "./page-news.module.css";

const PageNews = () => {
  return (
    <div>
      {Imgs}
      <StyledTitle level={2}>Новости</StyledTitle>
      <StyledList
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
        }}
        dataSource={news}
        renderItem={(item) => (
          <StyledListItem
            key={item.index}
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
            <StyleListItemMeta title={item.title} />
            {item.content}
          </StyledListItem>
        )}
      />
    </div>
  );
};

export default PageNews;
