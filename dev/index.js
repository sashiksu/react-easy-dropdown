import React from "react";
import ReactDOM from "react-dom/client";
import LivePlayground from "./LivePlayground";

/*
Temporary solution for webpack not reloading on file changes
*/
if (module.hot) {
  module.hot.accept();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
/* 
Do not remove strict mode, 
so we can check where component tree throws warnings when we updates core packages
*/
root.render(
  <React.StrictMode>
    <LivePlayground />
  </React.StrictMode>,
);

/* root.render(<LivePlayground />); */
