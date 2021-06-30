import React from "react";
import { Calendar, Tabs, Button, Progress, Space } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { StyledTitle, StyledText } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import "moment/locale/ru";
import "antd/dist/antd.css";
import css from "./page-administrator.module.css";

moment.locale("ru");

const PageAdministrator = () => {
  const { TabPane } = Tabs;

  const {
    setAdministrator,
    errorModal,
    errorAuthorization,
    errorRegister,
    errorCentre,
    errorDonation,
    errorList,
    errorBuy,
  } = useRootData((store) => ({
    setAdministrator: store.mainStore.setAdministrator,
    errorModal: store.mainStore.errorModal,
    errorAuthorization: store.mainStore.errorAuthorization,
    errorRegister: store.mainStore.errorRegister,
    errorCentre: store.mainStore.errorCentre,
    errorDonation: store.mainStore.errorDonation,
    errorList: store.mainStore.errorList,
    errorBuy: store.mainStore.errorBuy,
  }));

  const history = useHistory();
  const exitLogin = () => history.push("/library/authorization");

  const TabCalendar = (
    <div className={css.calendar}>
      <Calendar fullscreen={false} />
    </div>
  );

  const TabStatistics = (
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  );

  const onExit = () => {
    setAdministrator(false);
    exitLogin();
  };

  const handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "отчёт.txt";
    link.href = url;
    link.click();
  };

  return (
    <div className={css.administrator}>
      <StyledTitle level={2}>Панель администратора</StyledTitle>
      <div className={css.block}>
        <StyledText>
          Вы вошли в личный кабинет как администратор сайта!
        </StyledText>
        <Button type="primary" danger onClick={onExit}>
          Выйти
        </Button>
      </div>
      <Tabs type="card">
        <TabPane tab="Стастистика" key="1">
          {TabStatistics}
        </TabPane>
        <TabPane tab="Календарь" key="2">
          {TabCalendar}
        </TabPane>
        <TabPane tab="Отчёты об ошибках" key="3">
          <StyledText>
            Вы можете скачать отчёты об ошибках, произошедших в формах на сайте:
          </StyledText>
          <Space direction="vertical">
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorModal);
              }}
            >
              Обратная связь
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorAuthorization);
              }}
            >
              Авторизация
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorRegister);
              }}
            >
              Регистрация
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorCentre);
              }}
            >
              Заявки в Центр содействия инновациям и развитию бережливых
              технологий ВоГУ
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorDonation);
              }}
            >
              Заявки на книгу в дар
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorList);
              }}
            >
              Заявки на обходной лист
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleSaveToPC(errorBuy);
              }}
            >
              Заказ книг
            </Button>
          </Space>
        </TabPane>
        <TabPane tab="Инструкция" key="4">
          Инструкция
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PageAdministrator;
