import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import Footer from "../footer";

const history = createBrowserHistory();

describe("Футер", () => {
  afterEach(cleanup);

  it("Проверка стилей", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Footer />
      </Router>
    );

    const footer = getByTestId("footer");
    expect(footer).toHaveStyle(
      "display: flex;flex-direction: row;justify-content: space-evenly;align-items: flex-start;background: #0A1C40;padding-top: 40px;padding-bottom: 40px;color: #ffffff;font-family: 'Montserrat', sans-serif;"
    );

    const phone = getByTestId("phone");
    expect(phone).toHaveStyle("font-size: 24px;font-weight: 600;");

    const icons = getByTestId("icons");
    expect(icons).toHaveStyle("display: inline-block;");
  });
});
