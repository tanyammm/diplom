import React from "react";
import { StyledTitle } from "../../style";
import Books from "../../books";
import { useRootData } from "../../../hooks/use-root-data";
import card from "../../../api/books.json";
import "antd/dist/antd.css";
import css from "./page-catalog.module.css";

const PageCatalog = () => {
  const { selectBookCategory } = useRootData((store) => ({
    selectBookCategory: store.mainStore.selectBookCategory,
  }));

  return (
    <div className={css.catalog}>
      <StyledTitle level={2}>{selectBookCategory}</StyledTitle>
      {Books(card)}
    </div>
  );
};

export default PageCatalog;
