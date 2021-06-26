import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ReactRouterSetup from "./router";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import TodayDate from "./components/TodayDate";

ReactDOM.render(
  <React.StrictMode>
    {/* <TodayDate /> */}
    <ReactRouterSetup />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
