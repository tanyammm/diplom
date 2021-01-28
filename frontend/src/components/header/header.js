import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Input, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import menu from "./menu";
import imgs from "./imgs";
import "antd/dist/antd.css";
import css from "./header.module.css";

const Header = () => {
  const { searchBookGeneral } = useRootData((store) => ({
    searchBookGeneral: store.mainStore.searchBookGeneral,
  }));

  const searchText = (value) => {
    searchBookGeneral(value);
  };

  const { Search } = Input;
  const onSearch = (value) => {
    // нажатие на кнопку поиска
    searchText(value);
  };

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
          enterButton={<Link to="/library/search">Найти</Link>}
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
