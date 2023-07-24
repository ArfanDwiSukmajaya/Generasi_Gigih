import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Main from "./components/main/Main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sidebar />
    <Main />
  </React.StrictMode>
);
