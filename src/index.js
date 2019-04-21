import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import "./styles/style.scss";

import App from "./components/App.jsx";

const root = document.getElementById("root");

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
