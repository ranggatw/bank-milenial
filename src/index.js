import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

