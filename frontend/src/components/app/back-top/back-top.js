import React from "react";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
import css from "./back-top.module.css";

const BackTopButton = () => {
  return (
    <BackTop>
      {window.innerWidth > 768 ? (
        <UpOutlined
          className={css.button}
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      ) : (
        <UpOutlined
          className={css.button}
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      )}
    </BackTop>
  );
};

export default BackTopButton;
