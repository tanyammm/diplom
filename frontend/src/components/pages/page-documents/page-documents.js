import React from "react";
import StyledTitle from "../style/styled-title";
import PageDevelopment from "../page-development";
import "antd/dist/antd.css";
import css from "./page-documents.module.css";

const PageDocuments = () => {
  return (
    <div className={css.educational}>
      <StyledTitle level={2}>Документы</StyledTitle>
      <PageDevelopment />
    </div>
  );
};

export default PageDocuments;
