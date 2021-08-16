/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import {
  Calendar,
  Tabs,
  Button,
  Space,
  Statistic,
  Row,
  Col,
  Popconfirm,
  List,
  Avatar,
} from "antd";
import {
  TeamOutlined,
  ShoppingCartOutlined,
  DownloadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Column } from "@ant-design/charts";
import { useHistory } from "react-router-dom";
import moment from "moment";
import ErrorHandling from "./error-handling";
import { StyledTitle, StyledText } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import configUser from "./config-user";
import configBuy from "./config-buy";
import Modal from "./modal";
import "moment/locale/ru";
import "antd/dist/antd.css";
import css from "./page-administrator.module.css";

moment.locale("ru");

const PageAdministrator = () => {
  const { TabPane } = Tabs;

  const {
    setAdministrator,
    administrator,
    errorModal,
    errorAuthorization,
    errorRegister,
    errorCentre,
    errorDonation,
    errorList,
    errorBuy,
    quantityVisitors,
    quantityBuy,
    quantityDownloading,
    getUsers,
    users,
    onClickUsersDelete,
    openShowModalUser,
  } = useRootData((store) => ({
    setAdministrator: store.mainStore.setAdministrator,
    administrator: store.mainStore.administrator,
    errorModal: store.mainStore.errorModal,
    errorAuthorization: store.mainStore.errorAuthorization,
    errorRegister: store.mainStore.errorRegister,
    errorCentre: store.mainStore.errorCentre,
    errorDonation: store.mainStore.errorDonation,
    errorList: store.mainStore.errorList,
    errorBuy: store.mainStore.errorBuy,
    quantityVisitors: store.mainStore.quantityVisitors,
    quantityBuy: store.mainStore.quantityBuy,
    quantityDownloading: store.mainStore.quantityDownloading,
    getUsers: store.mainStore.getUsers,
    users: store.mainStore.users,
    onClickUsersDelete: store.mainStore.onClickUsersDelete,
    openShowModalUser: store.mainStore.openShowModalUser,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const history = useHistory();
  const exitLogin = () => history.push("/diplom/authorization");

  const TabStatistics = (
    <>
      <StyledText strong>Статистика в этом месяце:</StyledText>
      <Row gutter={16} className={css.row}>
        <Col span={8}>
          <Statistic
            title={<StyledText>Количество посетителей сайта</StyledText>}
            value={quantityVisitors}
            prefix={<TeamOutlined />}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title={<StyledText>Количество покупок</StyledText>}
            value={quantityBuy}
            prefix={<ShoppingCartOutlined />}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title={<StyledText>Количество скачиваний</StyledText>}
            value={quantityDownloading}
            prefix={<DownloadOutlined />}
          />
        </Col>
      </Row>
      <StyledText strong className={css.text}>
        Статистика посещений сайта:
      </StyledText>
      <Column {...configUser} />
      <StyledText strong className={css.text}>
        Статистика скачиваний и покупок литературы:
      </StyledText>
      <Column {...configBuy} />
    </>
  );

  const TabCalendar = (
    <div className={css.calendar}>
      <Calendar fullscreen={false} />
    </div>
  );

  const handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "отчёт.txt";
    link.href = url;
    link.click();
  };

  const TabReport = (
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
        Заявки в Центр содействия инновациям и развитию бережливых технологий
        ВоГУ
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
  );

  const onExit = () => {
    setAdministrator(false);
    exitLogin();
  };

  const onClick = (item) => {
    onClickUsersDelete(item._id);
  };

  const ListUser = () => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            actions={[
              <>
                {/* <Button
                  shape="circle"
                  type="primary"
                  icon={<EditOutlined />}
                  className={css.edit}
                  onClick={openShowModalUser}
                /> */}
                <Popconfirm
                  key={item._id}
                  title="Вы уверены, что хотите удалить этого пользователя?"
                  onConfirm={() => onClick(item)}
                  okText="Да"
                  cancelText="Нет"
                >
                  <Button
                    shape="circle"
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
              </>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={`${item.surname} ${item.name} ${item.patronymic}`}
              description={item.email}
            />
          </List.Item>
        )}
      />
    );
  };

  return (
    <div className={css.administrator}>
      {administrator ? (
        <>
          <StyledTitle level={2}>Панель администратора</StyledTitle>
          <div className={css.block}>
            <StyledText>
              Вы вошли в личный кабинет как администратор сайта!
            </StyledText>
            <Popconfirm
              title="Вы уверены, что хотите выйти?"
              onConfirm={onExit}
              okText="Да"
              cancelText="Нет"
            >
              <Button type="primary" danger>
                Выйти
              </Button>
            </Popconfirm>
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
                Вы можете скачать отчёты об ошибках, произошедших в формах на
                сайте:
              </StyledText>
              {TabReport}
            </TabPane>
            <TabPane tab="Пользователи" key="4">
              <ListUser />
            </TabPane>
            <TabPane tab="Инструкция" key="5">
              Инструкция
            </TabPane>
          </Tabs>
          <Modal />
        </>
      ) : (
        <ErrorHandling />
      )}
    </div>
  );
};

export default PageAdministrator;