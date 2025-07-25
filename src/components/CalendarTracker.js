import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './CalendarTracker.css';

function CalendarTracker() {
  const [range, setRange] = useState([null, null]);
  const [savedPeriods, setSavedPeriods] = useState([]);

  // Load all saved periods from localStorage on first render
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("periods")) || [];
    setSavedPeriods(data);
  }, []);

  const handleChange = (value) => {
    setRange(value);
    if (value[0] && value[1]) {
      const updated = [...savedPeriods, { start: value[0], end: value[1] }];
      localStorage.setItem("periods", JSON.stringify(updated));
      setSavedPeriods(updated);
    }
  };

  return (
    <div className="calendar-tracker fade-in">
      <h2>📅 Your Period Calendar</h2>
      <p className="calendar-note">Previously logged periods will be shown here.</p>

      <Calendar
        onChange={handleChange}
        value={range}
        selectRange={true}
        tileClassName={({ date }) => {
          return savedPeriods.some(({ start, end }) => {
            const s = new Date(start);
            const e = new Date(end);
            return date >= s && date <= e;
          })
            ? "highlight-range"
            : null;
        }}
      />
    </div>
  );
}

export default CalendarTracker;
