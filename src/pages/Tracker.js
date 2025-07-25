// src/pages/Tracker.js
import React from 'react';
import './Tracker.css'; // We’ll make this next

function Tracker() {
  return (
    <div className="tracker-page">
      <h2 className="tracker-heading">Day 1</h2>

      <div className="tracker-circle">
        <p className="tracker-label">Predicted Period</p>
      </div>

      <div className="tracker-info">
        <p>Cycle Length: 28 days</p>
        <p>Next Period: July 25</p>
        <p>Ovulation: July 17</p>
      </div>
    </div>
  );
}

export default Tracker;
