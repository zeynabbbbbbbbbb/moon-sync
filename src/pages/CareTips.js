// src/pages/CareTips.js
import React, { useEffect, useState } from "react";
import "./CareTips.css";

function CareTips() {
  const [phase, setPhase] = useState("pre");

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem("period-log")) || [];
    if (logs.length === 0) return;

    const latestLog = logs[logs.length - 1];
    const end = new Date(latestLog.endDate);
    const today = new Date();
    const diff = Math.floor((today - end) / (1000 * 60 * 60 * 24));

    if (diff <= 3) setPhase("post");
    else if (diff <= 7) setPhase("during");
    else setPhase("pre");
  }, []);

  const tips = {
    pre: {
      title: "💫 Pre-Period Phase",
      description: "Your body is preparing. Focus on gentle foods and mood balance.",
      items: [
        "Eat iron-rich foods like spinach & lentils",
        "Limit salty and processed snacks",
        "Practice yoga/stretching",
        "Hydrate with herbal teas"
      ]
    },
    during: {
      title: "🌙 During Period",
      description: "Take extra care. Let yourself rest & recharge.",
      items: [
        "Use heat pads for cramps",
        "Stay hydrated (water & soups)",
        "Eat magnesium-rich foods (bananas, dark chocolate)",
        "Get gentle movement (walks/yoga)"
      ]
    },
    post: {
      title: "🌼 Post-Period Recovery",
      description: "Time to rebuild. Nourish yourself well.",
      items: [
        "Protein-rich meals (eggs, tofu, legumes)",
        "Focus on fiber and fruits",
        "Stay active & energetic",
        "Keep track of emotional changes"
      ]
    }
  };

  return (
    <div className="care-container">
      <h2>{tips[phase].title}</h2>
      <p className="care-desc">{tips[phase].description}</p>
      <ul className="tips-list">
        {tips[phase].items.map((tip, index) => (
          <li key={index}>💡 {tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default CareTips;
