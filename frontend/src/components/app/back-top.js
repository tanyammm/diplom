import React from "react";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { orange } from "@ant-design/colors";

const BackTopButton = () => {
  return (
    <BackTop>
      <UpOutlined
        style={{
          background: orange.primary,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          color: "#ffffff",
        }}
      />
    </BackTop>
  );
};

export default BackTopButton;
