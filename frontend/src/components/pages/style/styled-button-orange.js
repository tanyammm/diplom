import { Button } from "antd";
import styled from "@emotion/styled";

export const StyledButtonOrange = styled(Button)`
  background: #fa8c16;
  border-color: #fa8c16;
  border-radius: 3px;

  &:hover,
  &:focus {
    background: #ffa940;
    border-color: #ffa940;
  }

  &:active {
    background: #d46b08;
    border-color: #d46b08;
  }
`;

export const StyledButtonShopping = styled(Button)`
  background: #ffffff;
  border-color: #fa8c16;
  color: #fa8c16;
  border-radius: 3px;
  border: 3px solid;

  &:hover,
  &:focus {
    background: #ffffff;
    color: #ffa940;
    border-color: #ffa940;
  }

  &:active {
    background: #ffffff;
    color: #d46b08;
    border-color: #d46b08;
  }
`;
