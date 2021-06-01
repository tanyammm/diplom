import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background: #fa8c16 !important;
  border-color: #fa8c16 !important;

  &:hover,
  &:focus {
    background: #ffa940 !important;
    border-color: #ffa940 !important;
  }

  &:active {
    background: #d46b08 !important;
    border-color: #d46b08 !important;
  }
`;

export default StyledButton;
