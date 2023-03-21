import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./styles.css";
import "bulma/css/bulma.css";
const Element = document.getElementById("root");

const root = ReactDOM.createRoot(Element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
