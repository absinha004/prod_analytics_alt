import React, { useState, useEffect } from 'react';
import './MouseClickTracker.css';

const MouseClickTracker = () => {
    const [timeLimit, setTimeLimit] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [cps, setCps] = useState(null);
    const [timerStarted, setTimerStarted] = useState(false);

    const startTest = (seconds) => {
        setTimeLimit(seconds);
        setTimeLeft(seconds);
        setClickCount(0);
        setCps(null);
        setIsActive(false);
        setTimerStarted(false);
    };

    const handleClick = () => {
        if (!timerStarted && timeLimit !== null) {
            setIsActive(true);
            setTimerStarted(true);
        }
        
        if (isActive) {
            setClickCount(prev => {
                const newCount = prev + 1;
                setCps((newCount / timeLimit).toFixed(2));
                return newCount;
            });
        }
    };

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev === 1) {
                        clearInterval(timer);
                        setIsActive(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isActive, timeLeft]);

    return (
        <div className="click-tracker-container">
            <h1>Mouse Click Speed Test</h1>
            <div className="timer-options">
                {[15, 20, 30].map(time => (
                    <button key={time} onClick={() => startTest(time)} className="timer-btn">
                        {time}s
                    </button>
                ))}
            </div>
            <div className="click-area" onClick={handleClick}>
                <button className={`click-btn ${isActive ? 'active' : ''}`}>Click Me!</button>
            </div>
            <div className="info-display">
                <h2>Time Left: {timeLeft !== null ? timeLeft : '--'}s</h2>
                <h2>Clicks: {clickCount}</h2>
                {cps !== null && <h2>Your CPS: {cps}</h2>}
            </div>
        </div>
    );
};

export default MouseClickTracker;
