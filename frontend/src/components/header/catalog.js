import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

const catalog = (
  <Menu>
    <SubMenu key="1" title="Учебно-научная литература">
      <Menu.Item>Издания</Menu.Item>
      <Menu.Item>Монографии</Menu.Item>
      <Menu.Item>Пособия</Menu.Item>
      <Menu.Item>Методические указания</Menu.Item>
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

export default catalog;
