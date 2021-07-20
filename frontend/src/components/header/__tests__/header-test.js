import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import Header from "../header";

const history = createBrowserHistory();

describe("Шапка", () => {
  afterEach(cleanup);

  it("Проверка стилей", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const header = getByTestId("header");
    expect(header).toHaveStyle("background: #ffffff;");
  });
});
