import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import Sidebare from "./components/sidebare/Sidebare";
import Main from "./components/main/Main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sidebare />
    <Main />
  </React.StrictMode>
);
