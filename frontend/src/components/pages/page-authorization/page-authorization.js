import React from "react";
import { Form, Input, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useRootData } from "../../../hooks/use-root-data";
import { FormlBot, FormPassword } from "../../reusable-components/form";
import {
  StyledText,
  StyledTitle,
  StyledForm,
  StyledButtonBlue,
  StyledDiv,
} from "../../style";
import "antd/dist/antd.css";

const PageAuthorization = () => {
  const {
    setAdministrator,
    sendAuthorization,
    botModal,
    setErrorAuthorization,
    setUser,
  } = useRootData((store) => ({
    sendAuthorization: store.mainStore.sendAuthorization,
    botModal: store.mainStore.botModal,
    setErrorAuthorization: store.mainStore.setErrorAuthorization,
    setAdministrator: store.mainStore.setAdministrator,
    setUser: store.mainStore.setUser,
  }));

  const [form] = Form.useForm();

  const history = useHistory();
  const goLogin = () => history.push("/library/administrator");
  const goLoginUser = () => history.push("/library/account");

  const onFinish = () => {
    if (botModal === "") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          sendAuthorization(value);
          if (value.login === "admin" && value.password === "admin") {
            goLogin();
            setAdministrator(true);
          } else if (value.login === "user" && value.password === "user") {
            goLoginUser();
            setUser(true);
          } else message.error("Такого пользователя нет!");
        })
        .catch((error) => {
          setErrorAuthorization(error);
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
        onFinish={onFinish}
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
        <FormPassword />
        <FormlBot />
        <StyledText>
          <span>
            У Вас нет аккаунта? -{" "}
            <Link to="/library/register">зарегистрируйтесь!</Link>
          </span>
        </StyledText>
        <StyledDiv>
          <StyledButtonBlue htmlType="submit" type="submit">
            Войти
          </StyledButtonBlue>
        </StyledDiv>
      </Form>
    </StyledForm>
  );
};

export default PageAuthorization;
