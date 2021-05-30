import { cleanup, render } from "@testing-library/react";
import React from "react";
import Modal from "../modal";

describe("Модальное окно", () => {
  afterEach(cleanup);

  it("form render ManualInput, проверяем стили", () => {
    const { getByTestId } = render(<Modal />);

    const styledModal = getByTestId("modal");
    expect(styledModal).toHaveStyle("display: flex;");

    // const form = getByTestId("form");
    // expect(form).toHaveStyle(
    //   "display: flex; position: relative; align-items: center;"
    // );

    // const actions = getByTestId("actions");
    // expect(actions).toHaveStyle("position: absolute;right: 0;");

    // const reset = getByTestId("reset-icon-layout");
    // expect(reset).toHaveStyle("color: red;");
  });

  //   it("проверяем состояние начальное состояние без ручного ввода", () => {
  //     const { queryByTestId } = render(
  //       <ManualInput
  //         id={10}
  //         isManual={false}
  //         onCancel={() => {}}
  //         onOk={() => {}}
  //       />
  //     );

  //     expect(queryByTestId("reset-button")).not.toBeInTheDocument();
  //     expect(queryByTestId("submit-button")).not.toBeInTheDocument();
  //   });
});
