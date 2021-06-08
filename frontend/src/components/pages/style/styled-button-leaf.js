import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButtonLeaf = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b418c !important;
  border-color: #1b418c !important;
  opacity: 0.7;

  &:hover,
  &:focus {
    background: #0a1c40 !important;
    border-color: #0a1c40 !important;
    opacity: 0.9;
  }

  &:active {
    background: #000000 !important;
    border-color: #000000 !important;
    opacity: 0.9;
  }

  &:disabled {
    background: #ffffff !important;
    border-color: #ffffff !important;
  }
`;

export default StyledButtonLeaf;
