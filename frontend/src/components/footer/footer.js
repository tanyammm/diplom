import React from "react";
import { Icon48LogoVk } from "@vkontakte/icons";
import { Tooltip } from "antd";
import { StyledTitle, StyledLink } from "./styled";
import Maps from "./map";
import "antd/dist/antd.css";
import css from "./footer.module.css";

const text = (
  <span className={css.tooltip}>Официальная страница в ВКонтакте</span>
);

const Footer = () => {
  return (
    <footer className={css.footer} data-testid="footer">
      <div>
        <StyledTitle>О библиотеке</StyledTitle>
        <StyledLink to="/library/donation">О библиотеке</StyledLink>
        <StyledLink to="/library/">Новости</StyledLink>
        <StyledLink to="/library/donation">Время работы</StyledLink>
      </div>
      <div>
        <StyledTitle>Интернет-магазин</StyledTitle>
        <StyledLink to="/library/donation">Каталог</StyledLink>
        <StyledLink to="/library/donation">Карта пункта выдачи</StyledLink>
        <StyledLink to="/library/donation">
          Пользовательское соглашение
        </StyledLink>
      </div>
      <div>
        <StyledTitle>Контакты</StyledTitle>
        <StyledLink to="/library/donation">
          Помощь и ответы на вопросы
        </StyledLink>
        <StyledLink to="/library/donation">Контакты и реквизиты</StyledLink>
        <StyledLink to="/library/donation">Обратная связь</StyledLink>
      </div>
      <div>
        <StyledTitle>Телефон</StyledTitle>
        <div className={css.phone} data-testid="phone">
          8 (8172) 72-10-12
        </div>
        <div className={css.icons} data-testid="icons">
          <Tooltip placement="bottom" title={text} color="#ffffff">
            <a href="https://vk.com/slibvsu">
              <Icon48LogoVk />
            </a>
          </Tooltip>
        </div>
      </div>
      <Maps />
    </footer>
  );
};

export default Footer;
