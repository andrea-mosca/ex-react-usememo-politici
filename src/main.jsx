import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// *IMPORT CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";
import "./assets/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
