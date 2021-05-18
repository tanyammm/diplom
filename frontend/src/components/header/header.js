import React from "react";
import { Link } from "react-router-dom";
import { Button, Space, Dropdown, Affix } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import StyledSearchInput from "./styled";
import Catalog from "./catalog";
import "antd/dist/antd.css";
import css from "./header.module.css";

const Header = () => {
  const { searchBookGeneral } = useRootData((store) => ({
    searchBookGeneral: store.mainStore.searchBookGeneral,
  }));

  return (
    <Affix className={css.header}>
      <div className={css.block}>
        <Link to="/library/">
          <div className={css.logo}>
            <div className={css.voguLogo} />
            <Button type="link" className={css.text}>
              Информационно-библиотечный комплекс ВоГУ
            </Button>
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
        <StyledSearchInput
          className={css.search}
          placeholder="введите текст для поиска"
          onSearch={searchBookGeneral}
          enterButton={
            <Link to="/library/search">
              <SearchOutlined />
            </Link>
          }
        />
        <Link to="/library/authorization">
          <Button className={css.user} type="link">
            <UserOutlined />
          </Button>
        </Link>
        <Link to="/library/authorization">
          <Button className={css.shoppin} type="link">
            <ShoppingCartOutlined />
          </Button>
        </Link>
      </div>
    </Affix>
  );
};

export default Header;
