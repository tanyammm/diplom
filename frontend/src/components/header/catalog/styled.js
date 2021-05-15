import { Menu } from "antd";
import styled from "@emotion/styled";

const { SubMenu } = Menu;

export const StyledMenu = styled(Menu)`
  .ant-dropdown-menu-submenu-title,
  .ant-dropdown-menu-item > a,
  .ant-dropdown-menu-item > a:hover {
    font-size: 16px;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .ant-dropdown-menu-item.ant-dropdown-menu-item-only-child.ant-dropdown-menu-item-active,
  .ant-dropdown-menu-submenu-title:hover {
    background: #7faeda;
  }

  .ant-dropdown-menu-submenu-title
    .ant-dropdown-menu-submenu-expand-icon
    .ant-dropdown-menu-submenu-arrow-icon {
    color: #ffffff;
  }
  .ant-dropdown-menu {
    background-color: darkred !important;
  }
`;

export const StyledMenuItem = styled(Menu.Item)``;

export const StyledSubMenu = styled(SubMenu)``;
