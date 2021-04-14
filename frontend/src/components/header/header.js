import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Space } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
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
        <div className={css.logo}>
          <div className={css.voguLogo} />
          <div className={css.text}>
            Информационно-библиотечный комплекс ВоГУ
          </div>
        </div>
        <Space className={css.rowButtons}>
          <Link to="/library/catalog">
            <Button type="link" className={css.button}>
              Книги
            </Button>
          </Link>
          <Link to="/library/services">
            <Button type="link" className={css.button}>
              Услуги
            </Button>
          </Link>
          <Link to="/library/stocks">
            <Button type="link" className={css.button}>
              Акции
            </Button>
          </Link>
          <Link to="/library/donation">
            <Button type="link" className={css.button}>
              Книга в дар
            </Button>
          </Link>
        </Space>
        <Search
          className={css.search}
          placeholder="введите текст для поиска"
          onSearch={onSearch}
          enterButton={
            <Link to="/library/search">
              <SearchOutlined />
            </Link>
          }
        />
        <Link to="/library/authorization">
          <Button type="primary" icon={<UserOutlined />} />
        </Link>
      </div>
      {imgs}
    </div>
  );
};

export default Header;
