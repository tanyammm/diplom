import React from "react";
import { Divider, Space, Button, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import CentreForm from "./form";
import { StyledTitle, StyledText, StyledAlert } from "../../style";
import { openNotification } from "../../reusable-components";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-centre.module.css";

const PageCentre = () => {
  const { setCenterStatus, centerStatus } = useRootData((store) => ({
    centerStatus: store.mainStore.centerStatus,
    setCenterStatus: store.mainStore.setCenterStatus,
  }));

  const { Text } = Typography;

  const onClose = () => {
    setCenterStatus(true);
  };

  return (
    <div className={css.centre}>
      <StyledTitle level={2}>
        Центр содействия инновациям и развитию бережливых технологий ВоГУ
      </StyledTitle>
      <Divider orientation="left">
        <StyledTitle level={4}>О Центре</StyledTitle>
      </Divider>
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
      <Space size="large" className={css.space}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          onClick={openNotification}
          className={css.primary}
        >
          Биржа проектов
        </Button>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          onClick={openNotification}
          className={css.primary}
        >
          Отзывы партнеров
        </Button>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          onClick={openNotification}
          className={css.primary}
        >
          База партнёров ВоГУ
        </Button>
      </Space>
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Предложить проект</StyledTitle>
      </Divider>
      <StyledText className={css.text}>
        Вы можете предложить проект, заполнив форму ниже.
      </StyledText>
      {centerStatus ? (
        <CentreForm />
      ) : (
        <StyledAlert
          message="Спасибо! Ваша заявка принята"
          description="Мы свяжемся с Вами в ближайшее время"
          type="success"
          closable
          onClose={onClose}
          showIcon
        />
      )}
      <Divider orientation="left" className={css.title}>
        <StyledTitle level={4}>Контакты Центра</StyledTitle>
      </Divider>
      <div className={css.indent}>
        <StyledText>
          <Text strong>Адрес</Text> {": "} 160000, г. Вологда, ул. Галкинская 1,
          корп. 2
        </StyledText>
        <StyledText>
          <Text strong>Менеджер Центра</Text> {": "} Елизавета Николаевна
          Скороходова
        </StyledText>
        <StyledText>
          <Text strong>Телефон</Text> {": "} (8172) 72-10-12
        </StyledText>
        <StyledText>
          <Text strong>E-mail</Text> {": "} sirbet@vogu35.ru
        </StyledText>
      </div>
    </div>
  );
};

export default PageCentre;