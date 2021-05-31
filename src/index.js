import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./view/Login";
import { Provider } from "react-redux";

import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Login />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
