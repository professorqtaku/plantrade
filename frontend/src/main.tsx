import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AllContextProviders from "./Contexts/AllContextProviders";

ReactDOM.render(
  <AllContextProviders>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AllContextProviders>,
  document.getElementById("root")
);
