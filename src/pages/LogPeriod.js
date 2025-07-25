// src/pages/LogPeriod.js
import React, { useState } from "react";
import "./LogPeriod.css";

function LogPeriod() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (startDate && endDate) {
      const newPeriod = {
        start: new Date(startDate),
        end: new Date(endDate),
        loggedAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem("periods")) || [];
      existing.push(newPeriod);
      localStorage.setItem("periods", JSON.stringify(existing));

      alert("🌸 Cycle logged successfully!");
      setStartDate("");
      setEndDate("");
    } else {
      alert("Please select both start and end dates.");
    }
  };

  return (
    <div className="log-container">
      <h2>Log Your Cycle</h2>
      <form onSubmit={handleSubmit}>
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button type="submit" className="save-btn">Save</button>
      </form>
    </div>
  );
}

export default LogPeriod;
