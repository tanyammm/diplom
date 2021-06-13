import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButtonLeaf = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b418c;
  border-color: #1b418c;
  opacity: 0.7;

  &:hover,
  &:focus {
    background: #0a1c40;
    border-color: #0a1c40;
    opacity: 0.9;
  }

  &:active {
    background: #000000;
    border-color: #000000;
    opacity: 0.9;
  }

  &:disabled {
    background: #f6f6f6;
    border-color: #f6f6f6;
  }
`;

export default StyledButtonLeaf;
