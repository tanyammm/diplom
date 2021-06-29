import React from "react";
import { Icon28LogoVkColor } from "@vkontakte/icons";
import { Tooltip } from "antd";
import { useRootData } from "../../hooks/use-root-data";
import { StyledTitle, StyledLink, StyledText } from "./styled";
import Maps from "./map";
import "antd/dist/antd.css";
import css from "./footer.module.css";

const Footer = () => {
  const { openShowModal } = useRootData((store) => ({
    openShowModal: store.mainStore.openShowModal,
  }));

  const text = (
    <span className={css.tooltip}>Официальная страница в ВКонтакте</span>
  );

  return (
    <footer className={css.footer} data-testid="footer">
      <div className={css.blok}>
        <StyledTitle>ИБК ВоГУ</StyledTitle>
        <StyledLink to="/library/about">О нас</StyledLink>
        <StyledLink to="/library/">Новости</StyledLink>
        <StyledLink to="/library/donation/">Книга в дар</StyledLink>
        <StyledLink to="/library/centre/">
          Центр содействия инновациям и развитию бережливых технологий ВоГУ
        </StyledLink>
      </div>
      <div className={css.blok}>
        <StyledTitle>Интернет-ресурсы</StyledTitle>
        <StyledLink to="/library/educational/">
          Система электронных образовательных ресурсов ВоГУ
        </StyledLink>
        <StyledLink to="/library/catalog/">Каталог книг</StyledLink>
        <StyledLink to="/library/register/">Личный кабинет</StyledLink>
      </div>
      <div className={css.blok}>
        <StyledTitle>Контакты</StyledTitle>
        <StyledText onClick={openShowModal}>Обратная связь</StyledText>
        <StyledLink to="/library/documents/">Документы</StyledLink>
        <StyledLink to="/library/contacts/">Контакты и режим работы</StyledLink>
      </div>
      <div className={css.blok}>
        <StyledTitle>Телефон</StyledTitle>
        <div className={css.phone} data-testid="phone">
          8 (8172) 72-10-12
        </div>
        <div className={css.icons} data-testid="icons">
          <Tooltip placement="bottom" title={text} color="#ffffff">
            <a href="https://vk.com/slibvsu">
              <Icon28LogoVkColor width={48} height={48} />
            </a>
          </Tooltip>
        </div>
      </div>
      <Maps />
    </footer>
  );
};

export default Footer;
