import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background: #fa8c16;
  border-color: #fa8c16;

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

export default StyledButton;
