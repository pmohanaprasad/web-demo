import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import NavBar from "./app/components/NavBar";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
