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
        <Text strong>Адрес</Text> {": "} 160000, г. Вологда, ул. Галкинская, 1
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>Телефон</Text> {": "} 8 (8172) 72-10-12
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>Факс</Text> {": "} 8 (8172) 72-54-48
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>E-mail</Text> {": "} lib@vogu35.ru
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>Интернет-сайт</Text> {": "} www.library.vogu35.ru
      </StyledTextContacts>
      <StyledTextContacts>
        <Text strong>Директор ИБК</Text> {": "} Воскресенская Оксана
        Владимировна, 8 (8172) 72-10-12 (2-76), voskresenskaiaov@vogu35.ru
      </StyledTextContacts>
      <StyledTextContacts />
    </>
  );
};

export default StyledContacts;
