import React, { useState, useEffect } from 'react';
import './TypingSpeedTracker.css';

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast and accurately requires practice.",
    "A journey of a thousand miles begins with a single step.",
    "React is a powerful JavaScript library for building user interfaces.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "She sells seashells by the seashore.",
    "An apple a day keeps the doctor away.",
    "Honesty is the best policy.",
    "The best way to predict the future is to create it.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "Do what you can, with what you have, where you are.",
    "It does not matter how slowly you go as long as you do not stop.",
    "A goal without a plan is just a wish.",
    "Opportunities don't happen, you create them.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "It always seems impossible until it's done.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "If you want to lift yourself up, lift up someone else.",
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "If you're going through hell, keep going.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "Do what you love and you'll never work a day in your life.",
    "Don't count the days, make the days count.",
    "Every strike brings me closer to the next home run.",
    "The best revenge is massive success.",
    "The only way to do great work is to love what you do.",
    "Be the change that you wish to see in the world.",
    "Success is not in what you have, but who you are.",
    "Act as if what you do makes a difference. It does.",
    "You are never too old to set another goal or to dream a new dream.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The way to get started is to quit talking and begin doing.",
    "Everything you can imagine is real.",
    "Your limitation—it's only your imagination.",
    "The best way out is always through.",
    "The best things in life aren't things.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Don't wait. The time will never be just right.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Start where you are. Use what you have. Do what you can.",
    "Everything you've ever wanted is on the other side of fear.",
    "The only impossible journey is the one you never begin.",
    "Success usually comes to those who are too busy to be looking for it.",
    "When you have a dream, you've got to grab it and never let go.",
    "You only live once, but if you do it right, once is enough.",
    "To handle yourself, use your head; to handle others, use your heart.",
    "Opportunities are usually disguised as hard work, so most people don't recognize them.",
    "The mind is everything. What you think you become.",
    "Don't let what you cannot do interfere with what you can do.",
    "If you believe it will work out, you'll see opportunities. If you believe it won't, you will see obstacles.",
    "Dream big and dare to fail.",
    "Don't let yesterday take up too much of today.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "If you do what you've always done, you'll get what you've always gotten.",
    "The only person you are destined to become is the person you decide to be.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The secret of getting ahead is getting started.",
    "You must be the change you wish to see in the world.",
    "Don't let the fear of losing be greater than the excitement of winning.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Energy and persistence conquer all things.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "It is never too late to be what you might have been.",
    "The key to success is to focus on goals, not obstacles.",
    "It's not whether you get knocked down, it's whether you get up.",
    "A river cuts through rock, not because of its power, but because of its persistence.",
    "Quality means doing it right when no one is looking.",
    "All progress takes place outside the comfort zone.",
    "You will never win if you never begin.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "It takes courage to grow up and become who you really are.",
    "Don't stop when you're tired. Stop when you're done.",
    "Small deeds done are better than great deeds planned.",
    "If you don't design your own life plan, chances are you'll fall into someone else's plan.",
    "Don't quit. Suffer now and live the rest of your life as a champion.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "We generate fears while we sit. We overcome them by action.",
    "The biggest adventure you can take is to live the life of your dreams."
];

const TypingSpeedTracker = () => {
    const [sampleText, setSampleText] = useState("");
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Select a random sentence when component mounts
        setSampleText(sentences[Math.floor(Math.random() * sentences.length)]);
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setUserInput(value);

        if (!startTime) {
            setStartTime(Date.now());
        }

        calculateSpeedAndAccuracy(value);

        if (value === sampleText) {
            setIsFinished(true);
        }
    };

    const calculateSpeedAndAccuracy = (text) => {
        if (!startTime) return;

        const elapsedTime = (Date.now() - startTime) / 60000; // Convert to minutes
        const wordCount = text.trim().split(/\s+/).length;
        setWpm(wordCount > 1 ? (wordCount / elapsedTime).toFixed(2) : 0);

        const correctChars = text.split('').filter((char, index) => char === sampleText[index]).length;
        const accuracyValue = ((correctChars / sampleText.length) * 100).toFixed(2);
        setAccuracy(accuracyValue);
    };

    const restartTest = () => {
        setUserInput('');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setIsFinished(false);
        setSampleText(sentences[Math.floor(Math.random() * sentences.length)]); // Pick new sentence
    };

    return (
        <div className="typing-container">
            <h2>Typing Speed Test</h2>
            <p className="sample-text">{sampleText}</p>
            <textarea
                value={userInput}
                onChange={handleChange}
                disabled={isFinished}
                placeholder="Start typing here..."
                className="typing-input"
            />
            <div className="stats">
                <p><strong>WPM:</strong> {wpm}</p>
                <p><strong>Accuracy:</strong> {accuracy}%</p>
            </div>
            {isFinished && <button className="restart-btn" onClick={restartTest}>Restart</button>}
        </div>
    );
};

export default TypingSpeedTracker;
