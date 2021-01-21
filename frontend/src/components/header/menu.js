import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<ReadOutlined />}>
      <Link to="/library/books">Категория 1</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<ReadOutlined />}>
      <Link to="/library/books">Категория 2</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<ReadOutlined />}>
      <Link to="/library/books">Категория 3</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<ReadOutlined />}>
      <Link to="/library/books">Категория 4</Link>
    </Menu.Item>
    <Menu.Item key="5" icon={<ReadOutlined />}>
      <Link to="/library/books">Категория 5</Link>
    </Menu.Item>
  </Menu>
);

export default menu;
