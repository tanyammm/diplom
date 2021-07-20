import { cleanup, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import Feedback from "../feedback";

const history = createBrowserHistory();

describe("Фидбек", () => {
  afterEach(cleanup);

  it("Проверка стилей", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Feedback />
      </Router>
    );

    const feedback = getByTestId("feedback");
    expect(feedback).toHaveStyle(
      "background: #fa8c16;position: absolute;width: 200.72px;height: 57.1px;left: -80px;transform: rotate(-90deg);z-index: 2;border-color: #d46b08;"
    );
    expect(feedback).toHaveStyleRule(
      "background: #d46b08;border-color: #ad4e00;"
    );
  });
});
