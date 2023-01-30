import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupChromeMocks } from "./services/chrome-api-mock";

const rootElement = document.createElement("div");
rootElement.id = "chrome-history-dashboard";
document.body.appendChild(rootElement);

setupChromeMocks();

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
