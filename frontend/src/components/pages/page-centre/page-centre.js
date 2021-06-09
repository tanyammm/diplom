import React from "react";
import StyledTitle from "../style/styled-title";
import PageDevelopment from "../page-development";
import "antd/dist/antd.css";
import css from "./page-centre.module.css";

const PageCentre = () => {
  return (
    <div className={css.centre}>
      <StyledTitle level={2}>
        Центр содействия инновациям и развитию бережливых технологий ВоГУ
      </StyledTitle>
      <PageDevelopment />
    </div>
  );
};

export default PageCentre;
