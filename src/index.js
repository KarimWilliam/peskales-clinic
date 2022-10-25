import React from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
const loadingMarkup = (
  <div>
    <h2>Loading...</h2>
  </div>
);
root.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
