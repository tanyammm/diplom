import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButtonOrange = styled(Button)`
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

export default StyledButtonOrange;
