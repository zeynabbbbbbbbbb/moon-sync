import React, { useEffect, useState } from "react";
import "./History.css";
import { FaRegCalendarAlt, FaRegSmile, FaRegClock } from "react-icons/fa";

function History() {
  const [periods, setPeriods] = useState([]);
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    const periodLog = JSON.parse(localStorage.getItem("period-log")) || [];
    const symptomLog = JSON.parse(localStorage.getItem("symptom-log")) || [];
    setPeriods(periodLog.reverse());
    setSymptoms(symptomLog.reverse());
  }, []);

  return (
    <div className="history-container fade-in">
      <h2 className="history-title">📝 Period & Mood History</h2>

      {periods.length === 0 ? (
        <p className="empty-text">No history available yet 💔</p>
      ) : (
        <div className="history-list">
          {periods.map((entry, index) => {
            const moodEntry = symptoms.find((sym) => {
              const symDate = new Date(sym.trackedAt).toDateString();
              const periodDate = new Date(entry.startDate).toDateString();
              return symDate === periodDate;
            });

            return (
              <div className="history-card" key={index}>
                <div className="history-row">
                  <FaRegCalendarAlt className="icon" />
                  <span>
                    <strong>Start:</strong> {entry.startDate}
                  </span>
                </div>
                <div className="history-row">
                  <FaRegClock className="icon" />
                  <span>
                    <strong>End:</strong> {entry.endDate}
                  </span>
                </div>
                {moodEntry?.mood && (
                  <div className="history-row">
                    <FaRegSmile className="icon" />
                    <span>
                      <strong>Mood:</strong> {moodEntry.mood}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;
