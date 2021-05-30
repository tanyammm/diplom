import React from "react";
import { Link } from "react-router-dom";
import { Button, Space, Dropdown, Affix } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import {
  StyledMenu,
  StyledSubMenu,
  StyledMenuItem,
  StyledSearchInput,
} from "./styled";
import "antd/dist/antd.css";
import css from "./header.module.css";

const Header = () => {
  const category1 = "Издания";
  const category2 = "Монографии";
  const category3 = "Пособия";
  const category4 = "Методические указания";
  const category5 = "Справочная литература";
  const category6 = "Художественная литература";
  const category7 = "Периодические издания";

  const { searchBookGeneral, setBookCategory } = useRootData((store) => ({
    searchBookGeneral: store.mainStore.searchBookGeneral,
    setBookCategory: store.mainStore.setBookCategory,
  }));

  const Catalog = (
    <StyledMenu className={css.menu}>
      <StyledSubMenu key="1" title="Учебно-научная литература">
        <StyledMenuItem>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category1)}
          >
            {category1}
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category2)}
          >
            {category2}
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category3)}
          >
            {category3}
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category4)}
          >
            {category4}
          </Link>
        </StyledMenuItem>
      </StyledSubMenu>
      <StyledMenuItem key="2">
        <Link to="/library/catalog" onClick={() => setBookCategory(category5)}>
          {category5}
        </Link>
      </StyledMenuItem>
      <StyledMenuItem key="3">
        <Link to="/library/catalog" onClick={() => setBookCategory(category6)}>
          {category6}
        </Link>
      </StyledMenuItem>
      <StyledMenuItem key="4">
        <Link to="/library/catalog" onClick={() => setBookCategory(category7)}>
          {category7}
        </Link>
      </StyledMenuItem>
    </StyledMenu>
  );

  return (
    <Affix className={css.header} data-testid="header">
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
