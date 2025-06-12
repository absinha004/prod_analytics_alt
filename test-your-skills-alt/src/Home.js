import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="split-container">
      <div
        className="split left"
        onClick={() => navigate("/MouseClickTracker")}
      >
        <div className="content">
          <img src="/mouse.jpg" alt="Mouse" className="icon" />
          <h2>Click Speed Test</h2>
        </div>
      </div>
      <div
        className="split right"
        onClick={() => navigate("/TypingSpeedTracker")}
      >
        <div className="content">
          <img src="/keyboard.jpg" alt="Keyboard" className="icon" />
          <h2>Typing Speed Test</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
