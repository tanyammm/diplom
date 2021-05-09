import React from "react";
import { Button, Affix } from "antd";
import "antd/dist/antd.css";
import css from "./feedback.module.css";

const Feedback = () => {
  return (
    <Affix>
      <Button className={css.feedback} type="primary">
        Форма обратной связи
      </Button>
    </Affix>
  );
};

export default Feedback;
