import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import reportWebVitals from "./reportWebVitals";

import routing from "./routes";

import { RouterProvider } from "react-router-dom";

// const router = routing;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routing} onUpdate={() => window.scroll(0, 0)} />
);
reportWebVitals();
