import React from "react";
import StyledTitle from "../style/styled-title";
import StyledText from "../style/styled-text";
import "antd/dist/antd.css";
import css from "./page-services.module.css";

const PageServices = () => {
  return (
    <div className={css.services}>
      <StyledTitle level={2}>Услуги</StyledTitle>
      <StyledText className={css.text}>Музей</StyledText>
      <StyledText className={css.text}>Услуги ИБК</StyledText>
      <StyledText className={css.text}>
        Центр содействия инновациям и развитию бережливых технологий ВоГУ
      </StyledText>
    </div>
  );
};

export default PageServices;
