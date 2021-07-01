import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { StyledText } from "../style/styled-text";

const SpinStyled = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled(StyledText)`
  display: flex;
  justify-content: center;
`;

const StyledSpin = () => {
  return (
    <SpinStyled>
      <Spin indicator={<LoadingOutlined />} />
      <Text>Загрузка...</Text>
    </SpinStyled>
  );
};

export default StyledSpin;
