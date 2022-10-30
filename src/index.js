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
  <div className="loader-container">
    <div class="loader"></div>
  </div>
);
root.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);

reportWebVitals();
