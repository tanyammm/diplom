/* eslint-disable no-console */
import React from "react";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { orange } from "@ant-design/colors";

const BackTopButton = () => {
  console.log(orange);
  return (
    <BackTop>
      <UpOutlined
        style={{
          background: orange.primary,
          width: "40px",
          height: "40px",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          "border-radius": "50%",
          color: "#ffffff",
        }}
      />
    </BackTop>
  );
};

export default BackTopButton;
