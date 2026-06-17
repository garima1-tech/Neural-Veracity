import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// =========================
// src/App.js
// =========================
import React from "react";
import Home from "./pages/Home";

export default function App() {
  return <Home />;
}
