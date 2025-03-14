import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
