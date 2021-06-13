import React from "react";
import { Link } from "react-router-dom";
import { Button, Space, Dropdown, Affix } from "antd";

import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import {
  StyledMenu,
  StyledSubMenu,
  StyledMenuItem,
  StyledSearchInput,
  StyledBadge,
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

  const { searchBookGeneral, setBookCategory, numberPurchases } = useRootData(
    (store) => ({
      searchBookGeneral: store.mainStore.searchBookGeneral,
      setBookCategory: store.mainStore.setBookCategory,
      numberPurchases: store.mainStore.numberPurchases,
    })
  );

  const Catalog = (
    <StyledMenu className={css.menu}>
      <StyledSubMenu key="1" title="Учебно-научная литература">
        <StyledMenuItem key={category1}>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category1)}
          >
            {category1}
          </Link>
        </StyledMenuItem>
        <StyledMenuItem key={category2}>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category2)}
          >
            {category2}
          </Link>
        </StyledMenuItem>
        <StyledMenuItem key={category3}>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category3)}
          >
            {category3}
          </Link>
        </StyledMenuItem>
        <StyledMenuItem key={category4}>
          <Link
            to="/library/catalog"
            className={css.subMenu}
            onClick={() => setBookCategory(category4)}
          >
            {category4}
          </Link>
        </StyledMenuItem>
      </StyledSubMenu>
      <StyledMenuItem key={category5}>
        <Link to="/library/catalog" onClick={() => setBookCategory(category5)}>
          {category5}
        </Link>
      </StyledMenuItem>
      <StyledMenuItem key={category6}>
        <Link to="/library/catalog" onClick={() => setBookCategory(category6)}>
          {category6}
        </Link>
      </StyledMenuItem>
      <StyledMenuItem key={category7}>
        <Link to="/library/catalog" onClick={() => setBookCategory(category7)}>
          {category7}
        </Link>
      </StyledMenuItem>
    </StyledMenu>
  );

  const Menu = (
    <StyledMenu className={css.menu}>
      <StyledMenuItem key="О нас">
        <Link to="/library/about">О нас</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Услуги">
        <Link to="/library/services">Услуги</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Книга в дар">
        <Link to="/library/donation">Книга в дар</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Центр СИиРБТ ВоГУ">
        <Link to="/library/centre">Центр СИиРБТ ВоГУ</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Документы">
        <Link to="/library/documents">Документы</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Контакты и режим работы">
        <Link to="/library/contacts">Контакты и режим работы</Link>
      </StyledMenuItem>
      <StyledMenuItem key="ВоГУ">
        <a href="https://vogu35.ru/">ВоГУ</a>
      </StyledMenuItem>
    </StyledMenu>
  );

  return (
    <Affix className={css.header} data-testid="header">
      <div className={css.block}>
        <div className={css.logo}>
          <div className={css.voguLogo} />
          <div className={css.text}>
            Информационно-библиотечный комплекс ВоГУ
          </div>
        </div>
        <Space className={css.rowButtons}>
          <Link to="/library/">
            <Button type="link" className={css.button}>
              Новости
            </Button>
          </Link>
          <Dropdown overlay={Catalog} className={css.catalog}>
            <Button type="link" className={css.buttonCatalog}>
              Книги <DownOutlined />
            </Button>
          </Dropdown>
          <Link to="/library/educational">
            <Button type="link" className={css.button}>
              Студентам
            </Button>
          </Link>
          <Dropdown overlay={Menu} className={css.catalog}>
            <Button type="link" className={css.buttonCatalog}>
              Об ИБК <DownOutlined />
            </Button>
          </Dropdown>
          {/* <a href="https://vogu35.ru/">
            <Button type="link" className={css.button}>
              ВоГУ
            </Button>
          </a> */}
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
        <Link to="/library/buy">
          <StyledBadge count={numberPurchases} offset={[-5, 1]}>
            <Button className={css.shoppin} type="link">
              <ShoppingCartOutlined />
            </Button>
          </StyledBadge>
        </Link>
      </div>
    </Affix>
  );
};

export default Header;
