import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import PageNews from "../page-news";

const history = createBrowserHistory();

describe("Страница новостей", () => {
  afterEach(cleanup);

  it("Проверка стилей", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PageNews />
      </Router>
    );

    const farther = getByTestId("farther");
    expect(farther).toHaveStyle(
      "font-weight: 600;font-size: 13px;color: #8C605D;"
    );
  });
});
