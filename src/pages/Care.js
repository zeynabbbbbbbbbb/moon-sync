// src/pages/Care.js
import React from "react";
import "./Care.css";

function Care() {
  return (
    <div className="care-container fade-in">
      <h2 className="care-title">💖 Self-Care & Comfort Tips</h2>
      <p className="care-intro">Because your comfort matters, always 💅✨</p>

      <div className="tips-grid">
        <div className="tip-card">
          🫖 <strong>Warm Tea</strong>
          <p>Herbal teas like chamomile or ginger can help ease cramps and calm your mood.</p>
        </div>
        <div className="tip-card">
          🛁 <strong>Warm Bath</strong>
          <p>Relax in a warm bath with essential oils to soothe body aches and stress.</p>
        </div>
        <div className="tip-card">
          🧘‍♀️ <strong>Gentle Yoga</strong>
          <p>Stretching lightly can reduce bloating and improve your mood.</p>
        </div>
        <div className="tip-card">
          🥗 <strong>Eat Light & Healthy</strong>
          <p>Opt for fruits, greens, and dark chocolate for mood-boosting nutrients.</p>
        </div>
        <div className="tip-card">
          😴 <strong>Sleep More</strong>
          <p>Your body is working hard, so give it rest. Aim for 8–9 hours of sleep.</p>
        </div>
      </div>
    </div>
  );
}

export default Care;
