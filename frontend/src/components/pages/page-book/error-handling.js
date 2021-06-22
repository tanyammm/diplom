import React from "react";
import { Result } from "antd";
import { FrownTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";
import "antd/dist/antd.css";

const StyledResult = styled(Result)`
  .ant-result-title {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 600;
  }
`;

const ErrorHandling = () => {
  return (
    <StyledResult
      icon={<FrownTwoTone twoToneColor="#f5222d" />}
      title="Упс! При просмотре ознакомительного фрагмента произошла ошибка"
    />
  );
};

export default ErrorHandling;
