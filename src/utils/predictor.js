// src/utils/predictor.js
export function getNextPeriodDate() {
  const log = JSON.parse(localStorage.getItem("period-log")) || [];

  if (log.length === 0) return "Not enough data yet";

  const lastEntry = log[log.length - 1];
  const lastEndDate = new Date(lastEntry.endDate);
  const avgCycleLength = 28; // you can make this dynamic later

  const predictedStart = new Date(lastEndDate);
  predictedStart.setDate(predictedStart.getDate() + avgCycleLength);

  return predictedStart.toDateString(); // Ex: "Sun Jul 28 2024"
}
