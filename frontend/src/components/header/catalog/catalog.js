import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import css from "./catalog.module.css";

const { SubMenu } = Menu;

const Catalog = (
  <Menu className={css.menu}>
    <SubMenu key="1" title="Учебно-научная литература">
      <Menu.Item>
        <Link to="/library/books">Издания</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/library/books">Монографии</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/library/books">Пособия</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/library/books">Методические указания</Link>
      </Menu.Item>
    </SubMenu>
    <Menu.Item key="2">
      <Link to="/library/books">Справочная литература</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/library/books">Художественная литература</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/library/books">Периодические издания</Link>
    </Menu.Item>
  </Menu>
);

export default Catalog;
