import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import NavBar from "./app/components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
