// src/pages/Home.js
import React from 'react';
import './Home.css';
import { FaCalendarAlt, FaHeartbeat, FaPlus, FaLeaf } from "react-icons/fa";
import { getNextPeriodDate } from '../utils/predictor';

function Home() {
  const nextPeriod = getNextPeriodDate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="home-title">Welcome to MoonSync</h2>
        <p className="home-subtitle">Your personal menstrual cycle tracker</p>

        {/* Prediction */}
        <p className="next-period-text">🩸 Next cycle expected: <strong>{nextPeriod}</strong></p>

        <div className="home-buttons">
          <a href="/log" className="home-btn"><FaPlus className="icon" />Log Period</a>
          <a href="/symptoms" className="home-btn"><FaHeartbeat className="icon" />Track Symptoms</a>
          <a href="/history" className="home-btn"><FaCalendarAlt className="icon" />View History</a>
          <a href="/calendar" className="home-btn"><FaCalendarAlt className="icon" />Open Tracker</a>
          <a href="/care" className="home-btn"><FaLeaf className="icon" />Diet & Care Tips</a>
        </div>
      </div>

      <footer className="footer">Your cycle. Your rhythm. Your way.</footer>
    </div>
  );
}

export default Home;
