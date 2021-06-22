import React from "react";
import { Divider, Typography } from "antd";
import styled from "@emotion/styled";
import StyledText from "./styled-text";
import StyledTitle from "./styled-title";
import "antd/dist/antd.css";

const { Text } = Typography;

const StyledDivider = styled(Divider)`
  padding-top: 3%;
`;

const StyledTextContacts = styled(StyledText)`
  text-indent: 30px;
`;

const StyledContacts = () => {
  return (
    <>
      <StyledDivider orientation="left">
        <StyledTitle level={4}>Контакты</StyledTitle>
      </StyledDivider>
      <StyledTextContacts>
        <Text strong>Адрес</Text> {": "} 160000, г. Вологда, ул. Галкинская, 1;
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>телефон</Text> {": "} 8 (8172) 72-10-12,
        <Text strong>факс</Text> {": "} 8 (8172) 72-54-48,
        <Text strong>e-mail</Text> {": "} lib@vogu35.ru;
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>Интернет-сайт</Text> {": "} www.library.vogu35.ru;
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>Директор ИБК</Text> {": "} Воскресенская Оксана
        Владимировна,
      </StyledTextContacts>
      <StyledTextContacts>
        тел.: 8 (8172) 72-10-12 (2-76), e-mail: voskresenskaiaov@vogu35.ru.
      </StyledTextContacts>
    </>
  );
};

export default StyledContacts;
