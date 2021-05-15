import styled from "@emotion/styled";

export const StyledButtonTitle = styled.div`
  font-size: 18px;
  padding-bottom: 18px;
`;

export const StyledButtonText = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  color: #ffffff;
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
