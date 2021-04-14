import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { StoreProvider } from "./store-provider";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
