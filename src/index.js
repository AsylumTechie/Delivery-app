import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function myApp() {
  return (
    <div className="container">
      <h1 className="text-white">Dark Theme React App</h1>
      <p className="text-muted">This is a paragraph in dark theme.</p>
    </div>
  );
}

export default myApp;

reportWebVitals();
