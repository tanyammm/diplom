import React from "react";
import { StyledTitle } from "../../style";
import Books from "../../reusable-components/books";
import { useRootData } from "../../../hooks/use-root-data";
import "antd/dist/antd.css";
import css from "./page-catalog.module.css";

const PageCatalog = () => {
  const { selectBookCategory, books } = useRootData((store) => ({
    selectBookCategory: store.mainStore.selectBookCategory,
    books: store.mainStore.books,
  }));

  return (
    <div className={css.catalog}>
      <StyledTitle level={2}>{selectBookCategory}</StyledTitle>
      {Books(books)}
    </div>
  );
};

export default PageCatalog;
