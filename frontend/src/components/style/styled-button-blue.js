import styled from "@emotion/styled";

export const StyledButtonBlue = styled("button")`
  margin-top: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  color: #ffffff;
  background: #40a9ff;
  background-image: linear-gradient(to left, #0a1c40, #40a9ff); /*градиент*/
  background: -o-linear-gradient(to left, #0a1c40, #40a9ff);
  background: -moz-linear-gradient(to left, #0a1c40, #40a9ff);
  background-image: -webkit-linear-gradient(120deg, #0a1c40, #40a9ff);
  cursor: pointer;
  width: 250px;
  height: 45px;
  box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.5);
  -webkit-box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.5);
  -moz-box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.5);

  &:hover,
  &:focus {
    color: #096dd9 !important;
    background: var(--white);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
    -moz-box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
    outline: none; /*контур отсутсвует*/
    border: 3px solid #096dd9; /*бордюр*/
    color: black; /*цвет текста*/
  }

  &:active {
    border: 3px solid #1b418c; /*бордюр*/
    color: #1b418c !important;
  }
`;

export const StyledDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
