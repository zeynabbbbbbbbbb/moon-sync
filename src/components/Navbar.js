// src/components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <h1 className="navbar-title">MoonSync</h1>
      <div className="navbar-links">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/log" className={isActive("/log")}>Log</Link>
        <Link to="/symptoms" className={isActive("/symptoms")}>Symptoms</Link>
        <Link to="/history" className={isActive("/history")}>History</Link>
        <Link to="/care" className={isActive("/care")}>Care Tips</Link>
      </div>
    </nav>
  );
}

export default Navbar; 