// src/pages/NotFound.js
import React from "react";
import "./NotFound.css";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="notfound-container">
      <FaExclamationTriangle className="notfound-icon" />
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="notfound-btn">← Back to Home</a>
    </div>
  );
}

export default NotFound;
