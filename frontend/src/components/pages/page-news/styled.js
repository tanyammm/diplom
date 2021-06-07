import { List } from "antd";
import styled from "@emotion/styled";

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  font-family: "Montserrat", sans-serif;
  margin-left: 15%;
  margin-right: 15%;

  .ant-list-item {
    background: #f6f6f6;
    margin-bottom: 2%;
  }
`;

export const StyledListItem = styled(List.Item)`
  .ant-list-item-main {
    font-size: 20px;
    color: #171717;
    padding-top: 1%;
  }
`;

export const StyleListItemMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    font-size: 25px !important;
    color: #1b418c !important;
    font-weight: 600 !important;
  }
`;
