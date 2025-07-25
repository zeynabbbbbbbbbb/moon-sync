import React, { useState } from "react";
import "./Symptoms.css";

function Symptoms() {
  const [symptoms, setSymptoms] = useState({
    mood: "",
    cramps: false,
    headache: false,
    bloating: false,
    fatigue: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSymptoms((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      ...symptoms,
      trackedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("symptom-log")) || [];
    existing.push(entry);
    localStorage.setItem("symptom-log", JSON.stringify(existing));

    alert("✅ Symptoms tracked!");
    setSymptoms({
      mood: "",
      cramps: false,
      headache: false,
      bloating: false,
      fatigue: false,
    });
  };

  return (
    <div className="symptoms-container fade-in">
      <h2 className="page-title">✨ How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Mood</label>
          <select name="mood" value={symptoms.mood} onChange={handleChange}>
            <option value="">Choose your mood</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="angry">😠 Angry</option>
            <option value="anxious">😟 Anxious</option>
            <option value="neutral">😐 Neutral</option>
          </select>
        </div>

        <div className="form-section checkboxes">
          <label>
            <input
              type="checkbox"
              name="cramps"
              checked={symptoms.cramps}
              onChange={handleChange}
            />
            Cramps
          </label>
          <label>
            <input
              type="checkbox"
              name="headache"
              checked={symptoms.headache}
              onChange={handleChange}
            />
            Headache
          </label>
          <label>
            <input
              type="checkbox"
              name="bloating"
              checked={symptoms.bloating}
              onChange={handleChange}
            />
            Bloating
          </label>
          <label>
            <input
              type="checkbox"
              name="fatigue"
              checked={symptoms.fatigue}
              onChange={handleChange}
            />
            Fatigue
          </label>
        </div>

        <button className="save-btn" type="submit">Save Entry</button>
      </form>
    </div>
  );
}

export default Symptoms;
