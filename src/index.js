import React from "react";
import ReactDOM from "react-dom/client";
// 모든 뷰에 통일되는 스타일링 부분 import
import "./css/public.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
