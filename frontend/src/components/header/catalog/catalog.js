import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu, StyledSubMenu, StyledMenuItem } from "./styled";
import "antd/dist/antd.css";
import css from "./catalog.module.css";

const Catalog = (
  <StyledMenu className={css.menu}>
    <StyledSubMenu key="1" title="Учебно-научная литература">
      <StyledMenuItem>
        <Link to="/library/catalog" className={css.subMenu}>
          Издания
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/library/catalog" className={css.subMenu}>
          Монографии
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/library/catalog" className={css.subMenu}>
          Пособия
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/library/catalog" className={css.subMenu}>
          Методические указания
        </Link>
      </StyledMenuItem>
    </StyledSubMenu>
    <StyledMenuItem key="2">
      <Link to="/library/catalog">Справочная литература</Link>
    </StyledMenuItem>
    <StyledMenuItem key="3">
      <Link to="/library/catalog">Художественная литература</Link>
    </StyledMenuItem>
    <StyledMenuItem key="4">
      <Link to="/library/catalog">Периодические издания</Link>
    </StyledMenuItem>
  </StyledMenu>
);

export default Catalog;
