import React from "react";
import { StyledTitle } from "../../style";
import { useRootData } from "../../../hooks/use-root-data";
import Books from "../../reusable-components/books";
import "antd/dist/antd.css";
import css from "./page-search.module.css";

const PageSearch = () => {
  const { elements } = useRootData((store) => ({
    elements: store.mainStore.elements,
  }));

  return (
    <div className={css.search}>
      <StyledTitle level={2}>Результаты поиска:</StyledTitle>
      {Books(elements)}
    </div>
  );
};

export default PageSearch;
