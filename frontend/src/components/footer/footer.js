import React, { useState } from "react";
import { Row, Col, Tooltip } from "antd";
import { Icon28LogoVkColor } from "@vkontakte/icons";
import { useRootData } from "../../hooks/use-root-data";
import { StyledTitle, StyledLink, StyledText } from "./styled";
import Maps from "./map";
import "antd/dist/antd.css";
import css from "./footer.module.css";

const Footer = () => {
  const { openShowModal } = useRootData((store) => ({
    openShowModal: store.mainStore.openShowModal,
  }));

  const [visibility, setVisibility] = useState(false);
  const [title, setTitle] = useState("Открыть");

  const text = (
    <span className={css.tooltip}>Официальная страница в ВКонтакте</span>
  );

  return (
    <Row gutter={[24, 24]} className={css.footer}>
      <Col span={4.8} className={css.blok}>
        <StyledTitle>ИБК ВоГУ</StyledTitle>
        <StyledLink to="/library/about">О нас</StyledLink>
        <StyledLink to="/library/">Новости</StyledLink>
        <StyledLink to="/library/donation">Книга в дар</StyledLink>
        <StyledLink to="/library/centre">
          Центр содействия инновациям и развитию бережливых технологий ВоГУ
        </StyledLink>
      </Col>
      <Col span={4.8} className={css.blok}>
        <StyledTitle>Интернет-ресурсы</StyledTitle>
        <StyledLink to="/library/student">Студентам</StyledLink>
        <StyledLink to="/library/catalog">Каталог книг</StyledLink>
        <StyledLink to="/library/list">Обходной лист</StyledLink>
        <StyledLink to="/library/register">Личный кабинет</StyledLink>
      </Col>
      <Col span={4.8} className={css.blok}>
        <StyledTitle>Контакты</StyledTitle>
        <StyledText onClick={openShowModal}>Обратная связь</StyledText>
        <StyledLink to="/library/documents/">Документы</StyledLink>
        <StyledLink to="/library/contacts">Контакты и режим работы</StyledLink>
      </Col>
      <Col span={4.8} className={css.blok}>
        <StyledTitle>Телефон</StyledTitle>
        <div className={css.phone} data-testid="phone">
          8 (8172) 72-10-12
        </div>
        <div className={css.icons} data-testid="icons">
          {window.innerWidth > 768 ? (
            <Tooltip placement="bottom" title={text} color="#ffffff">
              <a href="https://vk.com/slibvsu">
                <Icon28LogoVkColor width={48} height={48} />
              </a>
            </Tooltip>
          ) : (
            <a href="https://vk.com/slibvsu">
              <Icon28LogoVkColor width={48} height={48} />
            </a>
          )}
        </div>
      </Col>
      <Col span={4.8}>
        {window.innerWidth > 768 ? (
          <>{Maps(530, 200)}</>
        ) : (
          <div className={css.blok}>
            <StyledText
              onClick={() => {
                setVisibility(!visibility);
                if (title === "Открыть") {
                  setTitle("Скрыть");
                } else {
                  setTitle("Открыть");
                }
              }}
            >
              {title} карту
            </StyledText>
            {visibility ? (
              <div className={css.map}>
                {Maps(window.innerWidth / 1.3, window.innerHeight / 1.3)}
              </div>
            ) : null}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Footer;
