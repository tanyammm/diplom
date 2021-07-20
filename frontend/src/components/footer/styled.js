import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledTitle = styled.div`
  font-size: 18px;
  padding-bottom: 18px;
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  padding-bottom: 10px;
  color: #ffffff;
  width: fit-content;

  &:hover,
  &:focus {
    color: #40a9ff;
    background: transparent;
    border-color: #40a9ff;
  }

  &:active {
    color: #096dd9;
    background: transparent;
    border-color: #096dd9;
  }
`;

export const StyledText = styled("div")`
  font-size: 14px;
  padding-bottom: 10px;
  color: #ffffff;
  width: fit-content;

  &:hover,
  &:focus {
    color: #40a9ff;
    background: transparent;
    border-color: #40a9ff;
  }

  &:active {
    color: #096dd9;
    background: transparent;
    border-color: #096dd9;
  }
`;
