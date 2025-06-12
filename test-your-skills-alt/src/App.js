import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MouseClickTracker from './components/MouseClickTracker';
import TypingSpeedTracker from './components/TypingSpeedTracker';
import Home from './Home';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MouseClickTracker" element={<MouseClickTracker />} />
            <Route path="/TypingSpeedTracker" element={<TypingSpeedTracker />} />
        </Routes>
    );
};

export default App;
