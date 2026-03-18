import React from "react";
import ReactDOM from "react-dom/client";
import DigitalClock from "./DigitalClock";
import "./DigitalClock.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <DigitalClock />
  </React.StrictMode>
);