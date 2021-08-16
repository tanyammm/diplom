import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { StyledTextCenter } from "../style";
import "antd/dist/antd.css";

export const ErrorHandling = () => {
  return (
    <>
      <Result
        status="500"
        title="Произошла ошибка!"
        subTitle={
          <StyledTextCenter>
            Возможно, что Вы не подключены к Интернету или произошла ошибка на
            сервере. Попробуйте перезагрузить эту страницу или перейти на
            главную
          </StyledTextCenter>
        }
        extra={[
          <Link to="/diplom/" key="1">
            <Button type="primary">Главная страница</Button>
          </Link>,

          <Button
            key="2"
            onClick={() => {
              window.location.reload();
            }}
          >
            Перезагрузка
          </Button>,
        ]}
      />
    </>
  );
};
