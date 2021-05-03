import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { Icon48LogoVk } from "@vkontakte/icons";
import Maps from "./map";
import "antd/dist/antd.css";
import css from "./footer.module.css";

const text = <span>Официальная страница в ВКонтакте</span>;

const Footer = () => {
  return (
    <div className={css.footer}>
      <div>
        <div className={css.title}>О библиотеке</div>
        <Link to="/library/donation">
          <div className={css.text}>О библиотеке</div>
        </Link>
        <Link to="/library/donation">
          <div className={css.text}>Новости</div>
        </Link>
        <Link to="/library/donation">
          <div className={css.text}>Время работы</div>
        </Link>
      </div>
      <div>
        <div className={css.title}>Интернет-магазин</div>
        <Link to="/library/donation">
          <div className={css.text}>Каталог</div>
        </Link>
        <Link to="/library/donation">
          <div className={css.text}>Карта пункта выдачи</div>
        </Link>
        <Link to="/library/donation">
          <div className={css.text}>Пользовательское соглашение</div>
        </Link>
      </div>
      <div>
        <div className={css.title}>Контакты</div>
        <Link to="/library/donation">
          <div className={css.text}>Помощь и ответы на вопросы</div>
        </Link>
        <Link to="/library/donation">
          <div className={css.text}>Контакты и реквизиты</div>
        </Link>
        <Link to="/library/donation">
          <div className={css.text}>Обратная связь</div>
        </Link>
      </div>
      <div>
        <div className={css.title}>Телефон</div>
        <div className={css.phone}>8 (8172) 72-10-12</div>
        <div className={css.icons}>
          <Tooltip placement="bottom" title={text}>
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
