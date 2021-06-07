import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const StyledSpin = () => {
  return <Spin indicator={<LoadingOutlined />} />;
};

export default StyledSpin;
