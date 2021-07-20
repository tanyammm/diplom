import { Typography } from "antd";
import styled from "@emotion/styled";

const { Text } = Typography;

export const StyledText = styled(Text)`
  color: #000000;
  display: flex;
  font-size: 15px;
`;

export const StyledTextCenter = styled(StyledText)`
  display: flex;
  justify-content: center;
`;
