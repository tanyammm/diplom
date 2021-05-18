import { Typography } from "antd";
import styled from "@emotion/styled";

const { Title } = Typography;

const StyledTitle = styled(Title)`
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 1%;
  padding-top: 1%;
  color: #0a1c40 !important;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
`;

export default StyledTitle;
