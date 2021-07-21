import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { StyledTitle, StyledText } from "../../style";
import "antd/dist/antd.css";
import css from "./page-educational.module.css";

const PageEducational = () => {
  return (
    <div className={css.educational}>
      <StyledTitle level={2}>Студентам</StyledTitle>
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Инструкция</StyledTitle>
      </Divider>
      <StyledText className={css.text}>
        Уважаемые студенты, на нашем сайте вы можете:
      </StyledText>
      <StyledText>
        <ul>
          <li>
            <Link to="/library/list">заказать обходной лист;</Link>
          </li>
          <li>
            <Link to="/library/catalog">скачать книги;</Link>
          </li>
          <li>
            <Link to="/library/donation">передать книгу в дар;</Link>
          </li>
          <li>
            <Link to="/library/contacts">узнать режим работы;</Link>
          </li>
          <li>
            <Link to="/library/">посмотреть новости ИБК ВоГУ.</Link>
          </li>
        </ul>
      </StyledText>
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>
          Система электронных образовательных ресурсов ВоГУ
        </StyledTitle>
      </Divider>
      <StyledText className={css.text}>
        Мы предлагаем вашему вниманию новый сводный информационный продукт.
        Надеемся, что Система электронных образовательных ресурсов,
        сформированная и структурированная в помощь учебному и научному
        процессам, повысит оперативность и удобство поиска, обеспечит вам
        информационный комфорт. СЭОР организована как единая точка доступа к
        электронным коллекциям научно-образовательного назначения, объединяющая
        профильные полнотекстовые ресурсы всех видов с целью дальнейшего
        развития электронной информационно-образовательной среды ВоГУ, повышения
        качества информационного обеспечения. СЭОР имеет модульную структуру.
        Модули интегрируются в единую распределенную систему информационных
        ресурсов с общим контентом, сохраняя при этом собственные
        технологические платформы. Доступ к полным текстам предоставляется
        авторизованным пользователям - студентам, аспирантам, преподавателям,
        другим категориям работников ВоГУ.
      </StyledText>
      <StyledText className={css.text}>
        Состав модулей, интегрированных в СЭОР:
      </StyledText>
      <StyledText>
        <ul>
          <li>
            <a href="https://do.vogu35.ru/">
              портал электронных образовательных технологий (ПЭОТ);
            </a>
          </li>
          <li>
            <a href="https://vstu.antiplagiat.ru/">антиплагиат вуз;</a>
          </li>
          <li>
            <a href="https://ump.vogu35.ru/">учебно-методический портал;</a>
          </li>
          <li>
            <a href="http://www.biblioclub.ru/">
              ЭБС Университетская библиотека online;
            </a>
          </li>
          <li>
            <a href="https://urait.ru/">ЭБС Юрайт;</a>
          </li>
          <li>
            <a href="https://e.lanbook.com/">ЭБС Лань;</a>
          </li>
          <li>
            <a href="https://znanium.com/">ЭБС Знаниум.</a>
          </li>
        </ul>
      </StyledText>
    </div>
  );
};

export default PageEducational;
