import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root using React 18's new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
