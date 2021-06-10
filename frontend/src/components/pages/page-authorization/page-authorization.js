import { Form, Input, message } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { useRootData } from "../../../hooks/use-root-data";
import { ModalBot, ModalCheckbox, ModalPassword } from "../../modal";
import StyledTitle from "../style/styled-title";
import StyledText from "../style/styled-text";
import css from "./page-authorization.module.css";

const PageAuthorization = () => {
  const { sendAuthorization, botModal, setError } = useRootData((store) => ({
    sendAuthorization: store.mainStore.sendAuthorization,
    botModal: store.mainStore.botModal,
    setError: store.mainStore.setError,
  }));

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          sendAuthorization(value);
          if (value.login === "admin" && value.password === "admin") {
            message.success("Вы вошли как Администратор!");
          } else message.error("Такого пользователя нет!");
        })
        .catch((error) => {
          setError(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <div className={css.authorization}>
      <StyledTitle level={2}>Авторизация</StyledTitle>
      <Form name="nest-messages" form={form} layout="vertical">
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: "Вы не ввели логин",
            },
          ]}
        >
          <Input placeholder="логин" />
        </Form.Item>
        <ModalPassword />
        <ModalBot />
        <ModalCheckbox />
      </Form>
      <StyledText>
        У вас нет аккаунта? -{" "}
        <Link to="/library/register">зарегистрируйтесь!</Link>
      </StyledText>
      <button className={css.login} onClick={onSubmit} type="button">
        Войти
      </button>
    </div>
  );
};

export default PageAuthorization;