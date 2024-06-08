import React from "react";
import ReactDOM from "react-dom/client";
/*--------------------------------------------------------------------*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
/*--------------------------------------------------------------------*/
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
/*--------------------------------------------------------------------*/
import "./index.css";
/*--------------------------------------------------------------------*/
import App from "./App.jsx";
/*--------------------------------------------------------------------*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="bottom-right" />
    <App />
  </React.StrictMode>,
);
