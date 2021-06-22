import React from "react";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { useRootData } from "../../../hooks/use-root-data";
import { ModalBot, ModalCheckbox, ModalPassword } from "../../modal";
import {
  StyledText,
  StyledTitle,
  StyledForm,
  StyledButtonBlue,
} from "../style";
import "antd/dist/antd.css";
import css from "../style/page-form.module.css";

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
    <StyledForm>
      <StyledTitle level={2}>Авторизация</StyledTitle>
      <Form
        name="nest-messages"
        form={form}
        layout="vertical"
        className={css.form}
      >
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
      <StyledButtonBlue onClick={onSubmit} type="submit">
        Войти
      </StyledButtonBlue>
    </StyledForm>
  );
};

export default PageAuthorization;
