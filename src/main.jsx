import React from "react";
import ReactDOM from "react-dom/client";
/*-------------------------------------------------------------------*/
import { Provider } from "react-redux";
import store from "./redux-store/store.js";
/*-------------------------------------------------------------------*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
/*-------------------------------------------------------------------*/
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
/*-------------------------------------------------------------------*/
import "./index.css";
/*-------------------------------------------------------------------*/
import App from "./App.jsx";
/*-------------------------------------------------------------------*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="bottom-right" />
      <App />
    </Provider>
  </React.StrictMode>,
);
