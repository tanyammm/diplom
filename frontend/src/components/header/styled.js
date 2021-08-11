import { Input, Menu, Badge, Affix } from "antd";
import styled from "@emotion/styled";

const { Search } = Input;
const { SubMenu } = Menu;

export const StyledMenu = styled(Menu)`
  .ant-dropdown-menu-submenu-title,
  .ant-dropdown-menu-item > a,
  .ant-dropdown-menu-item > a:hover {
    font-size: 16px;
    color: #ffffff;
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

export const StyledSearchInput = styled(Search)`
  .ant-input,
  .ant-btn.ant-btn-primary.ant-input-search-button,
  .ant-input-group-addon {
    background: #0a1c40;
    border: 1px solid #0a1c40;
    border-right-width: 2px !important;
    color: white;
  }

  .ant-input-group-addon :hover,
  .ant-input-group-addon :focus {
    border-color: #1890ff !important;
  }
`;

export const StyledBadge = styled(Badge)`
  .ant-badge-count {
    background: #f27d16;
    box-shadow: none;
    font-weight: 600;
  }
`;

export const StyledAffix = styled(Affix)`
  .ant-affix {
    z-index: 101;
  }
`;
