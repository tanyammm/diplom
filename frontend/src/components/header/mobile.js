import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useRootData } from "../../hooks/use-root-data";
import { StyledBadge } from "./styled";
import "antd/dist/antd.css";
import css from "./header.module.css";

const HeaderMobile = () => {
  const { administrator, setBookCategory, numberPurchases } = useRootData(
    (store) => ({
      administrator: store.mainStore.administrator,
      setBookCategory: store.mainStore.setBookCategory,
      numberPurchases: store.mainStore.numberPurchases,
    })
  );

  const [menu, setMenu] = useState(true);
  const { SubMenu } = Menu;

  const category1 = "Издания";
  const category2 = "Монографии";
  const category3 = "Пособия";
  const category4 = "Методические указания";
  const category5 = "Справочная литература";
  const category6 = "Художественная литература";
  const category7 = "Периодические издания";

  return (
    <>
      <div className={css.text}>ИБК ВоГУ</div>
      <div className={css.icons}>
        {administrator ? (
          <Link to="/diplom/administrator">
            <Button className={css.link} type="link">
              <UserOutlined />
            </Button>
          </Link>
        ) : (
          <Link to="/diplom/authorization">
            <Button className={css.link} type="link">
              <UserOutlined />
            </Button>
          </Link>
        )}
        <Link to="/diplom/shopping">
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
            <Link to="/diplom/">Новости</Link>
          </Menu.Item>
          <Menu.Item key="Поиск книг">
            <Link to="/diplom/search">Поиск книг</Link>
          </Menu.Item>
          <SubMenu key="Книги" title="Книги">
            <SubMenu
              key="Учебно-научная литература"
              title="Учебно-научная литература"
            >
              <Menu.Item key={category1}>
                <Link
                  to="/diplom/catalog"
                  onClick={() => setBookCategory(category1)}
                >
                  {category1}
                </Link>
              </Menu.Item>
              <Menu.Item key={category2}>
                <Link
                  to="/diplom/catalog"
                  onClick={() => setBookCategory(category2)}
                >
                  {category2}
                </Link>
              </Menu.Item>
              <Menu.Item key={category3}>
                <Link
                  to="/diplom/catalog"
                  onClick={() => setBookCategory(category3)}
                >
                  {category3}
                </Link>
              </Menu.Item>
              <Menu.Item key={category4}>
                <Link
                  to="/diplom/catalog"
                  onClick={() => setBookCategory(category4)}
                >
                  {category4}
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key={category5}>
              <Link
                to="/diplom/catalog"
                onClick={() => setBookCategory(category5)}
              >
                {category5}
              </Link>
            </Menu.Item>
            <Menu.Item key={category6}>
              <Link
                to="/diplom/catalog"
                onClick={() => setBookCategory(category6)}
              >
                {category6}
              </Link>
            </Menu.Item>
            <Menu.Item key={category7}>
              <Link
                to="/diplom/catalog"
                onClick={() => setBookCategory(category7)}
              >
                {category7}
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="Студентам">
            <Link to="/diplom/student">Студентам</Link>
          </Menu.Item>
          <SubMenu key="ИБК ВоГУ" title="ИБК ВоГУ">
            <Menu.Item key="О нас">
              <Link to="/diplom/about">О нас</Link>
            </Menu.Item>
            <Menu.Item key="Обходной лист">
              <Link to="/diplom/list">Обходной лист</Link>
            </Menu.Item>
            <Menu.Item key="Книга в дар">
              <Link to="/diplom/donation">Книга в дар</Link>
            </Menu.Item>
            <Menu.Item key="Услуги">
              <Link to="/diplom/centre">Центр СИиРБТ ВоГУ</Link>
            </Menu.Item>
            <Menu.Item key="Документы">
              <Link to="/diplom/documents">Документы</Link>
            </Menu.Item>
            <Menu.Item key="Контакты и режим работы">
              <Link to="/diplom/contacts">Контакты и режим работы</Link>
            </Menu.Item>
            <Menu.Item key="ВоГУ">
              <a href="https://vogu35.ru/">ВоГУ</a>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </>
  );
};

export default HeaderMobile;
