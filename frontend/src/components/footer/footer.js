import React from "react";
import { Link } from "react-router-dom";
import { Icon48LogoVk } from "@vkontakte/icons";
import { Tooltip } from "antd";
import { StyledButtonTitle, StyledButtonText } from "./styled";
import Maps from "./map";
import "antd/dist/antd.css";
import css from "./footer.module.css";

const text = (
  <span className={css.tooltip}>Официальная страница в ВКонтакте</span>
);

const Footer = () => {
  return (
    <div className={css.footer}>
      <div>
        <StyledButtonTitle>О библиотеке</StyledButtonTitle>
        <Link to="/library/donation">
          <StyledButtonText>О библиотеке</StyledButtonText>
        </Link>
        <Link to="/library/donation">
          <StyledButtonText>Новости</StyledButtonText>
        </Link>
        <Link to="/library/donation">
          <StyledButtonText>Время работы</StyledButtonText>
        </Link>
      </div>
      <div>
        <StyledButtonTitle>Интернет-магазин</StyledButtonTitle>
        <Link to="/library/donation">
          <StyledButtonText>Каталог</StyledButtonText>
        </Link>
        <Link to="/library/donation">
          <StyledButtonText>Карта пункта выдачи</StyledButtonText>
        </Link>
        <Link to="/library/donation">
          <StyledButtonText>Пользовательское соглашение</StyledButtonText>
        </Link>
      </div>
      <div>
        <StyledButtonTitle>Контакты</StyledButtonTitle>
        <Link to="/library/donation">
          <StyledButtonText>Помощь и ответы на вопросы</StyledButtonText>
        </Link>
        <Link to="/library/donation">
          <StyledButtonText>Контакты и реквизиты</StyledButtonText>
        </Link>
        <Link to="/library/donation">
          <StyledButtonText>Обратная связь</StyledButtonText>
        </Link>
      </div>
      <div>
        <StyledButtonTitle>Телефон</StyledButtonTitle>
        <div className={css.phone}>8 (8172) 72-10-12</div>
        <div className={css.icons}>
          <Tooltip placement="bottom" title={text} color="#ffffff">
            <a href="https://vk.com/slibvsu">
              <Icon48LogoVk />
            </a>
          </Tooltip>
        </div>
      </div>
      <Maps />
    </div>
  );
};

export default Footer;
