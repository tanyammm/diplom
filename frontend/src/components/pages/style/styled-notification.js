import React from "react";
import { notification } from "antd";
import { FrownTwoTone } from "@ant-design/icons";

const openNotification = () => {
  notification.open({
    duration: 10,
    message: "Эта функция находится в разработке",
    description: "Просим прощения за доставленные неудобства",
    icon: <FrownTwoTone twoToneColor="#eb2f96" />,
  });
};

export default openNotification;
