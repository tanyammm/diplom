import React from "react";
import vk from "../../icons/vk.svg";
import vogu from "../../icons/vogu.svg";
import "antd/dist/antd.css";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <div className={css.Footer}>
      <p className={css.title}>Контакты: +8 (8172) 72-10-12, lib@vogu35.ru</p>
      <a className={css.icons} href="https://vk.com/slibvsu">
        <img src={vk} alt="Официальная страничка в Вконтакте" />
      </a>
      <a className={css.icons} href="https://vogu35.ru/">
        <img src={vogu} alt="Официальный сайт ВоГУ" />
      </a>
    </div>
  );
};

export default Footer;
