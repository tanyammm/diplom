import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";
import "antd/dist/antd.css";

const PageDevelopment = () => {
  return (
    <div>
      <Result
        status="500"
        title="Страница находится в разработке"
        subTitle="Просим прощения за доставленные неудобства"
        extra={
          <Link to="/library/">
            <Button type="primary">Главная страница</Button>
          </Link>
        }
      />
    </div>
  );
};

export default PageDevelopment;
