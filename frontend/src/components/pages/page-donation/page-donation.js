import React from "react";
import { Typography } from "antd";
import StyledTitle from "../style/styled-title";
import "antd/dist/antd.css";
import css from "./page-donation.module.css";

const PageDonation = () => {
  const { Text } = Typography;

  return (
    <div className={css.donation}>
      <StyledTitle level={2}>Книга в дар</StyledTitle>
      <Text strong className={css.text}>
        Чтобы передать книгу в дар Информационно-библиотечному комплексу ВоГУ,
        ознакомтесь с Положением{" "}
        <a href="http://localhost:3000/library/donation">
          О комплектовании фондов ИБК ВоГУ.
        </a>
      </Text>
      <Text strong className={css.text}>
        Просим заранее, ещё до вашего приезда в библиотеку или до высылки
        изданий почтой, передать нам по телефону или по электронной почте
        информацию о будущих дарах. Мы дорожим вашим временем и не хотим, чтобы
        предпринятые вами действия оказались напрасными. После вашего обращения
        мы проверим наличие предлагаемых вами книг и документов в наших фондах.
        Если вы присылаете издания по почте без предварительной договорённости,
        просим обратить внимание на то, что Российская государственная
        библиотека не несёт ответственность за дары, не принятые в фонды. Факт
        поступления издания в фонды РГБ мы подтвердим официальным документом.
        Сведения о принятых дарах заносятся в Книги даров Российской
        государственной библиотеки. Сообщения о наиболее ценных экземплярах
        размещаются на официальном сайте библиотеки.
      </Text>
      <Text strong className={css.text}>
        <div>
          Контакты:
          <div>E-mail: library@vogu35.ru, lib@vogu35.ru</div>
          <div>Телефон: 8 (8172) 72-10-12</div>
          <div>Адрес: Вологда, ул. Галкинская, 1, корп. 2</div>
        </div>
      </Text>
    </div>
  );
};

export default PageDonation;
