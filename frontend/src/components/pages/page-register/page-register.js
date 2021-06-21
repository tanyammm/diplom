import { Form, Input, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useRootData } from "../../../hooks/use-root-data";
import {
  ModalPhone,
  ModalEmail,
  ModalBot,
  ModalCheckbox,
  ModalPassword,
} from "../../modal";
import {
  StyledTitle,
  StyledText,
  StyledForm,
  StyledButtonBlue,
} from "../style";
import "antd/dist/antd.css";

const PageRegister = () => {
  const { sendRegister, botModal, setError } = useRootData((store) => ({
    sendRegister: store.mainStore.sendRegister,
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
          sendRegister(value);
          if (value.password === value.password1) {
            message.success("Вы успешно зарегистрировались!");
          } else message.error("Пароли не совпадают!");
        })
        .catch((error) => {
          setError(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <StyledForm>
      <StyledTitle level={2}>Регистрация</StyledTitle>
      <Form name="nest-messages" form={form} layout="vertical">
        <Form.Item
          label="Фамилия"
          name="surname"
          rules={[
            {
              required: true,
              message: "Вы не ввели фамилию",
            },
          ]}
        >
          <Input placeholder="Иванов" />
        </Form.Item>
        <Form.Item
          label="Имя"
          name="name"
          rules={[
            {
              required: true,
              message: "Вы не ввели имя",
            },
          ]}
        >
          <Input placeholder="Иван" />
        </Form.Item>
        <Form.Item label="Отчество" name="patronymic">
          <Input placeholder="Иванович" />
        </Form.Item>
        <ModalPhone />
        <ModalEmail />
        <ModalPassword />
        <Form.Item
          label="Пароль повторно"
          name="password1"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите пароль повторно",
            },
          ]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>
        <ModalBot />
        <ModalCheckbox />
      </Form>
      <StyledText>
        У вас есть аккаунт? -{" "}
        <Link to="/library/authorization">авторизуйтесь!</Link>
      </StyledText>
      <StyledButtonBlue onClick={onSubmit} type="button">
        Зарегистрироваться
      </StyledButtonBlue>
    </StyledForm>
  );
};

export default PageRegister;
