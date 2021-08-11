import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";
import { StyledTextCenter } from "../../style";
import "antd/dist/antd.css";

const PageError = () => {
  return (
    <Result
      status="404"
      title="Страница не найдена!"
      subTitle={
        <StyledTextCenter>
          К сожалению, страница, которую Вы посетили, не существует. Либо она
          была удалена с сервера, либо её здесь никогда не было. Попробуйте
          перейти на главную страницу.
        </StyledTextCenter>
      }
      extra={
        <Link to="/diplom/">
          <Button type="primary">Главная страница</Button>
        </Link>
      }
    />
  );
};

export default PageError;
