import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Row, Col, Menu } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CaretDownOutlined,
  MenuOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import {
  StyledMenu,
  StyledSubMenu,
  StyledMenuItem,
  StyledSearchInput,
  StyledBadge,
  StyledAffix,
} from "./styled";
import "antd/dist/antd.css";
import css from "./header.module.css";

const Header = () => {
  const { administrator, searchBookGeneral, setBookCategory, numberPurchases } =
    useRootData((store) => ({
      administrator: store.mainStore.administrator,
      searchBookGeneral: store.mainStore.searchBookGeneral,
      setBookCategory: store.mainStore.setBookCategory,
      numberPurchases: store.mainStore.numberPurchases,
    }));

  const [openBook, setОpenBook] = useState(false);
  const [iconBook, setIconBook] = useState(<CaretDownOutlined />);
  const [openMenu, setОpenMenu] = useState(false);
  const [iconMenu, setIconMenu] = useState(<CaretDownOutlined />);

  const setОpenMenuBook = () => {
    if (openBook === true) {
      setОpenBook(false);
      setIconBook(<CaretDownOutlined />);
      document
        .getElementById("button")
        .classList.remove(css.buttonCatalogActive);
    } else {
      setОpenBook(true);
      setIconBook(<CaretUpOutlined />);
      document.getElementById("button").classList.add(css.buttonCatalogActive);
    }
  };

  const setОpenMenuIBK = () => {
    if (openMenu === true) {
      setОpenMenu(false);
      setIconMenu(<CaretDownOutlined />);
      document.getElementById("menu").classList.remove(css.buttonCatalogActive);
    } else {
      setОpenMenu(true);
      setIconMenu(<CaretUpOutlined />);
      document.getElementById("menu").classList.add(css.buttonCatalogActive);
    }
  };

  const [menu, setMenu] = useState(true);

  const { SubMenu } = Menu;

  const category1 = "Издания";
  const category2 = "Монографии";
  const category3 = "Пособия";
  const category4 = "Методические указания";
  const category5 = "Справочная литература";
  const category6 = "Художественная литература";
  const category7 = "Периодические издания";

  const Catalog = (
    <StyledMenu className={css.menu}>
      <StyledSubMenu
        key="Учебно-научная литература"
        title="Учебно-научная литература"
      >
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

  const MenuButton = (
    <StyledMenu className={css.menu}>
      <StyledMenuItem key="О нас">
        <Link to="/library/about">О нас</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Обходной лист">
        <Link to="/library/list">Обходной лист</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Книга в дар">
        <Link to="/library/donation">Книга в дар</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Центр СИиРБТ ВоГУ">
        <Link to="/library/centre">Центр СИиРБТ ВоГУ</Link>
      </StyledMenuItem>
      <StyledMenuItem key="Услуги">
        <Link to="/library/services">Услуги</Link>
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
    <StyledAffix data-testid="header">
      <Row className={css.header}>
        {window.innerWidth > 768 ? (
          <>
            <Col span={9} className={css.logo}>
              {window.innerWidth > 1517 ? (
                <>
                  <div className={css.voguLogo} />
                  <div className={css.text}>
                    Информационно-библиотечный комплекс ВоГУ
                  </div>
                </>
              ) : (
                <div className={css.text}>ИБК ВоГУ</div>
              )}
            </Col>
            <Col span={8} className={css.rowButtons}>
              <Link to="/library/">
                <Button type="link" className={css.button}>
                  Новости
                </Button>
              </Link>
              <Dropdown
                overlay={Catalog}
                className={css.catalog}
                onVisibleChange={setОpenMenuBook}
              >
                <Button type="link" className={css.buttonCatalog} id="button">
                  Книги {iconBook}
                </Button>
              </Dropdown>
              <Link to="/library/student">
                <Button type="link" className={css.button}>
                  Студентам
                </Button>
              </Link>
              <Dropdown
                overlay={MenuButton}
                className={css.catalog}
                onVisibleChange={setОpenMenuIBK}
              >
                <Button type="link" className={css.buttonCatalog} id="menu">
                  Об ИБК {iconMenu}
                </Button>
              </Dropdown>
            </Col>
            <Col span={5} className={css.blok}>
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
            </Col>
            <Col span={2} className={css.icons}>
              {administrator ? (
                <Link to="/library/administrator">
                  <Button className={css.link} type="link">
                    <UserOutlined />
                  </Button>
                </Link>
              ) : (
                <Link to="/library/authorization">
                  <Button className={css.link} type="link">
                    <UserOutlined />
                  </Button>
                </Link>
              )}
              <Link to="/library/shopping">
                <StyledBadge count={numberPurchases} offset={[-5, 1]}>
                  <Button className={css.link} type="link">
                    <ShoppingCartOutlined />
                  </Button>
                </StyledBadge>
              </Link>
            </Col>
          </>
        ) : (
          <>
            <div className={css.text}>ИБК ВоГУ</div>
            <div className={css.icons}>
              {administrator ? (
                <Link to="/library/administrator">
                  <Button className={css.link} type="link">
                    <UserOutlined />
                  </Button>
                </Link>
              ) : (
                <Link to="/library/authorization">
                  <Button className={css.link} type="link">
                    <UserOutlined />
                  </Button>
                </Link>
              )}
              <Link to="/library/shopping">
                <StyledBadge count={numberPurchases} offset={[-5, 1]}>
                  <Button className={css.link} type="link">
                    <ShoppingCartOutlined />
                  </Button>
                </StyledBadge>
              </Link>
            </div>
            <Menu
              inlineCollapsed={menu}
              onSelect={() => {
                setMenu(true);
              }}
              theme="dark"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="Меню"
                icon={<MenuOutlined />}
                title="Меню"
                onTitleClick={() => {
                  setMenu(false);
                }}
              >
                <Menu.Item key="Новости">
                  <Link to="/library/">Новости</Link>
                </Menu.Item>
                <Menu.Item key="Поиск книг">
                  <Link to="/library/search">Поиск книг</Link>
                </Menu.Item>
                <SubMenu key="Книги" title="Книги">
                  <SubMenu
                    key="Учебно-научная литература"
                    title="Учебно-научная литература"
                  >
                    <Menu.Item key={category1}>
                      <Link
                        to="/library/catalog"
                        onClick={() => setBookCategory(category1)}
                      >
                        {category1}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key={category2}>
                      <Link
                        to="/library/catalog"
                        onClick={() => setBookCategory(category2)}
                      >
                        {category2}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key={category3}>
                      <Link
                        to="/library/catalog"
                        onClick={() => setBookCategory(category3)}
                      >
                        {category3}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key={category4}>
                      <Link
                        to="/library/catalog"
                        onClick={() => setBookCategory(category4)}
                      >
                        {category4}
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item key={category5}>
                    <Link
                      to="/library/catalog"
                      onClick={() => setBookCategory(category5)}
                    >
                      {category5}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key={category6}>
                    <Link
                      to="/library/catalog"
                      onClick={() => setBookCategory(category6)}
                    >
                      {category6}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key={category7}>
                    <Link
                      to="/library/catalog"
                      onClick={() => setBookCategory(category7)}
                    >
                      {category7}
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="Студентам">
                  <Link to="/library/student">Студентам</Link>
                </Menu.Item>
                <SubMenu key="ИБК ВоГУ" title="ИБК ВоГУ">
                  <Menu.Item key="О нас">
                    <Link to="/library/about">О нас</Link>
                  </Menu.Item>
                  <Menu.Item key="Обходной лист">
                    <Link to="/library/list">Обходной лист</Link>
                  </Menu.Item>
                  <Menu.Item key="Книга в дар">
                    <Link to="/library/donation">Книга в дар</Link>
                  </Menu.Item>
                  <Menu.Item key="Услуги">
                    <Link to="/library/centre">Центр СИиРБТ ВоГУ</Link>
                  </Menu.Item>
                  <Menu.Item key="Документы">
                    <Link to="/library/documents">Документы</Link>
                  </Menu.Item>
                  <Menu.Item key="Контакты и режим работы">
                    <Link to="/library/contacts">Контакты и режим работы</Link>
                  </Menu.Item>
                  <Menu.Item key="ВоГУ">
                    <a href="https://vogu35.ru/">ВоГУ</a>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </>
        )}
      </Row>
    </StyledAffix>
  );
};

export default Header;
