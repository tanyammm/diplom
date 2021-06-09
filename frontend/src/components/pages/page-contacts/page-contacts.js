import React from "react";
import StyledTitle from "../style/styled-title";
import PageDevelopment from "../page-development";
import "antd/dist/antd.css";
import css from "./page-contacts.module.css";

const PageContacts = () => {
  return (
    <div className={css.contacts}>
      <StyledTitle level={2}>Контакты и режим работы</StyledTitle>
      <PageDevelopment />
    </div>
  );
};

export default PageContacts;
