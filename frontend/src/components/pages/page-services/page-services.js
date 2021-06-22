import React from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { StyledTitle, StyledText, StyledContacts } from "../style";
import "antd/dist/antd.css";
import css from "./page-services.module.css";

const PageServices = () => {
  return (
    <div className={css.services}>
      <StyledTitle level={2}>Услуги</StyledTitle>
      <Divider orientation="left">
        <StyledTitle level={4}>Виды услуг</StyledTitle>
      </Divider>
      <StyledText className={css.indent}>Музей ВоГУ:</StyledText>
      <StyledText>
        <ul className={css.ul}>
          <li>проведение экскурсий;</li>
          <li>организация и проведение мероприятий.</li>
        </ul>
      </StyledText>
      <StyledText className={css.indent}>
        <Link to="/library/centre">
          Центр содействия инновациям и развитию бережливых технологий ВоГУ:
        </Link>
      </StyledText>
      <StyledText>
        <ul className={css.ul}>
          <li>поиск финансирования;</li>
          <li>заказ проектов.</li>
        </ul>
      </StyledText>
      <StyledText className={css.indent}>
        Информационно-библиотечный комплекс ВоГУ:
      </StyledText>
      <StyledText>
        <ul>
          <li>
            проверка, редактирование и составление библиографических списков;
          </li>
          <li>проверка работ в системе Антиплагиат.ВУЗ.</li>
        </ul>
      </StyledText>
      <StyledText className={css.indent}>
        Для получения подробной информации об услугах обратитесь к нам удобным
        для Вас способом.
      </StyledText>
      <StyledContacts />
    </div>
  );
};

export default PageServices;
