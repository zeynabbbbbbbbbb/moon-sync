import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogPeriod from './pages/LogPeriod';
import Symptoms from './pages/Symptoms';
import History from './pages/History';
import Tracker from './pages/Tracker';
import CalendarTracker from './components/CalendarTracker';
import Care from './pages/Care';
import CareTips from "./pages/CareTips";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<LogPeriod />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/history" element={<History />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/calendar" element={<CalendarTracker />} />
          <Route path="/care" element={<Care />} />
          <Route path="/care" element={<CareTips />} />
          <Route path="*" element={<NotFound />} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;
