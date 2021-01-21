/* eslint-disable no-console */
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Input, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import menu from "./menu";
import imgs from "./imgs";
import "antd/dist/antd.css";
import css from "./header.module.css";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Header = () => {
  return (
    <div className={css.Header}>
      <div className={css.block}>
        <Dropdown overlay={menu} className={css.menu}>
          <Button>
            Каталог книг
            <DownOutlined />
          </Button>
        </Dropdown>
        <Search
          className={css.search}
          placeholder="введите текст для поиска"
          onSearch={onSearch}
          enterButton
        />
        <Space>
          <Link to="/library/catalog">
            <Button type="primary">Каталог</Button>
          </Link>
          <Link to="/library/">
            <Button type="primary">Главная</Button>
          </Link>
          <a href="https://vogu35.ru/">
            <Button type="primary">ВоГУ</Button>
          </a>
        </Space>
        <Link to="/library/authorization">
          <Button type="primary" icon={<UserOutlined />} />
        </Link>
      </div>
      {imgs}
    </div>
  );
};

export default Header;
