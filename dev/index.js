import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* 
Do not remove strict mode, 
so we can check where component tree throws warnings when we updates core packages
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
