import React from "react";
import { StyledTitle } from "../../style";
import PageDevelopment from "../page-development";
import "antd/dist/antd.css";
import css from "./page-educational.module.css";

const PageEducational = () => {
  return (
    <div className={css.educational}>
      <StyledTitle level={2}>
        Система электронных образовательных ресурсов ВоГУ
      </StyledTitle>
      <PageDevelopment />
    </div>
  );
};

export default PageEducational;
