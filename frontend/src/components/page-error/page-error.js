import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";
import "antd/dist/antd.css";

const PageError = () => {
  return (
    <div>
      <Result
        status="404"
        title="Ошибка 404!"
        subTitle="К сожалению, страница, которую вы посетили, не существует. Вероятно, она была удалена с сервера, либо её здесь никогда не было. Попробуйте перейти на главную страницу."
        extra={
          <Link to="/library/">
            <Button type="primary">Главная страница</Button>
          </Link>
        }
      />
    </div>
  );
};

export default PageError;
