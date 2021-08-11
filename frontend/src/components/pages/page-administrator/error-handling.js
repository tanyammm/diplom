import React from "react";
import { Result, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { StyledTextCenter } from "../../style";
import "antd/dist/antd.css";

const ErrorHandling = () => {
  return (
    <Result
      icon={<StopOutlined />}
      status="error"
      title="У вас не хватает прав для просмотра этой страницы"
      subTitle={
        <StyledTextCenter>
          Попробуйте перейти на главную страницу или войти в личный кабинет
        </StyledTextCenter>
      }
      extra={[
        <Link to="/diplom/" key="1">
          <Button type="primary">Главная страница</Button>
        </Link>,
        <Link to="/diplom/authorization" key="2">
          <Button key="buy">Личный кабинет</Button>
        </Link>,
      ]}
    />
  );
};

export default ErrorHandling;
