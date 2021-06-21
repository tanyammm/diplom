import React from "react";
import { Typography, Space, Button } from "antd";
import PageCentreForm from "./form";
import {
  StyledTitle,
  StyledText,
  openNotification,
  StyledAlert,
} from "../style";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-centre.module.css";

const { Text } = Typography;

const PageCentre = () => {
  const { setCenterStatus, centerStatus } = useRootData((store) => ({
    centerStatus: store.mainStore.centerStatus,
    setCenterStatus: store.mainStore.setCenterStatus,
  }));

  const onClose = () => {
    setCenterStatus(true);
  };

  return (
    <div className={css.centre}>
      <StyledTitle level={2}>
        Центр содействия инновациям и развитию бережливых технологий ВоГУ
      </StyledTitle>
      <StyledText className={css.text}>
        Центр содействия инновациям и развитию бережливых технологий
        Вологодского государственного университета создан с целью поддержки
        развития наукоемких и высокотехнологичных производств, предприятий и
        организаций региона.
      </StyledText>
      <StyledText className={css.indent}>
        К услугам Центра относится поиск финансирования, в том числе:
      </StyledText>
      <StyledText>
        <ul className={css.ul}>
          <li>мониторинг электронно-торговых площадок;</li>
          <li>подготовка конкурсной документации;</li>
          <li>подготовка документации для лизинговых проектов.</li>
        </ul>
      </StyledText>
      <StyledText className={css.indent}>Наши преимущества:</StyledText>
      <StyledText>
        <ul className={css.ul}>
          <li>
            более 150 млн. руб. привлечено на развитие предприятий и организаций
            научно-педагогическими работниками Вологодского госуниверситета;
          </li>
          <li>
            реализация проектов различных объемов и масштабов (в т.ч.
            фундаментальных и прикладных научно-исследовательских работ) в
            области строительства, энергетики, машиностроения, IT, экономики и
            финансов, менеджмента и др;
          </li>
          <li>
            партнерские отношения с более чем 1600 предприятиями и
            организациями, в т.ч. 34 зарубежных партнера из 15 стран мира.
          </li>
        </ul>
      </StyledText>
      <Space size="1" className={css.space}>
        <Button type="dashed" className={css.button} onClick={openNotification}>
          Биржа проектов
        </Button>
        <Button type="dashed" className={css.button} onClick={openNotification}>
          Отзывы партнеров
        </Button>
        <Button type="dashed" className={css.button} onClick={openNotification}>
          База партнёров ВоГУ
        </Button>
      </Space>
      <StyledText className={css.text}>
        Вы можете предложить проект, заполнив форму ниже.
      </StyledText>
      {centerStatus ? (
        <PageCentreForm />
      ) : (
        <StyledAlert
          message="Спасибо! Ваша заявка принята."
          description="Мы свяжемся с Вами в ближайшее время"
          type="success"
          closable
          onClose={onClose}
          showIcon
        />
      )}
      <StyledText className={css.contacts}>
        <Text strong>Контакты Центра:</Text>
      </StyledText>
      <StyledText className={css.indent}>e-mail: sirbet@vogu35.ru;</StyledText>
      <StyledText className={css.indent}>тел.: (8172) 72-10-12;</StyledText>
      <StyledText className={css.indent}>
        адрес: 160000, г. Вологда, ул. Галкинская, 1.
      </StyledText>
    </div>
  );
};

export default PageCentre;
