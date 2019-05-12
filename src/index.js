import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";

import "./styles/style.scss";

import App from "./components/App.jsx";

const root = document.getElementById("root");

let store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(<App Router={BrowserRouter} store={store} />, root);
