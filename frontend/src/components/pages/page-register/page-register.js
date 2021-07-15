import React from "react";
import { Form, Input, message, notification } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useRootData } from "../../../hooks/use-root-data";
import {
  FormPhone,
  FormEmail,
  FormlBot,
  FormCheckbox,
  FormPassword,
} from "../../reusable-components/form";
import {
  StyledTitle,
  StyledText,
  StyledForm,
  StyledButtonBlue,
} from "../../style";
import "antd/dist/antd.css";
import css from "../../style/page-form.module.css";

const PageRegister = () => {
  const { sendRegister, botModal, setErrorRegister } = useRootData((store) => ({
    sendRegister: store.mainStore.sendRegister,
    botModal: store.mainStore.botModal,
    setErrorRegister: store.mainStore.setErrorRegister,
  }));

  const history = useHistory();
  const goLogin = () => history.push("/library/authorization");

  const openNotification = () => {
    notification.open({
      duration: 10,
      message: "Вы успешно зарегистрировались!",
      description: "Войдите в свой личный кабинет",
      icon: <SmileTwoTone twoToneColor="#52c41a" />,
    });
  };

  const [form] = Form.useForm();

  const onSubmit = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          sendRegister(value);
          if (value.password === value.passwordAgain) {
            openNotification();
            goLogin();
          } else message.error("Пароли не совпадают!");
        })
        .catch((error) => {
          setErrorRegister(error);
        });
    } else message.error("Оставьте поле пустым");
  };

  return (
    <StyledForm>
      <StyledTitle level={2}>Регистрация</StyledTitle>
      <Form
        name="nest-messages"
        form={form}
        layout="vertical"
        className={css.form}
      >
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
        <FormPhone />
        <FormEmail />
        <FormPassword />
        <Form.Item
          label="Пароль повторно"
          name="passwordAgain"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите пароль повторно",
            },
          ]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>
        <FormlBot />
        <FormCheckbox />
      </Form>
      <StyledText>
        У вас есть аккаунт? -
        <Link to="/library/authorization">авторизуйтесь!</Link>
      </StyledText>
      <StyledButtonBlue onClick={onSubmit} type="submit">
        Зарегистрироваться
      </StyledButtonBlue>
    </StyledForm>
  );
};

export default PageRegister;
