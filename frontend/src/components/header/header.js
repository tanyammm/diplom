import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Space, Dropdown, Affix } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import Imgs from "./imgs";
import Catalog from "./catalog";
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
  const OnClickSearch = (value) => {
    // нажатие на кнопку поиска
    searchText(value);
  };

  return (
    <div className={css.header}>
      <Affix>
        <div className={css.block}>
          <Link to="/library/">
            <div className={css.logo}>
              <div className={css.voguLogo} />
              <div className={css.text}>
                Информационно-библиотечный комплекс ВоГУ
              </div>
            </div>
          </Link>
          <Space className={css.rowButtons}>
            <Dropdown overlay={Catalog} className={css.catalog}>
              <Button type="link" className={css.buttonCatalog}>
                Книги
              </Button>
            </Dropdown>
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
            onSearch={OnClickSearch}
            enterButton={
              <Link to="/library/search">
                <SearchOutlined />
              </Link>
            }
          />
          <Link to="/library/authorization">
            <Button type="link">
              <div className={css.user} />
            </Button>
          </Link>
          <Link to="/library/authorization">
            <Button type="link">
              <div className={css.shoppin} />
            </Button>
          </Link>
        </div>
      </Affix>
      {Imgs}
    </div>
  );
};

export default Header;
