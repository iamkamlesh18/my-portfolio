import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Peace.css';

const PRACTICE_LENGTH = 60;
const BREATH_PHASE_LENGTH = 4;

const Peace = () => {
    const [secondsLeft, setSecondsLeft] = useState(PRACTICE_LENGTH);
    const [isRunning, setIsRunning] = useState(false);
    const elapsed = PRACTICE_LENGTH - secondsLeft;
    const phase = Math.floor(elapsed / BREATH_PHASE_LENGTH) % 2 === 0 ? 'Breathe in' : 'Breathe out';

    useEffect(() => {
        if (!isRunning) return undefined;

        const timer = window.setInterval(() => {
            setSecondsLeft((remaining) => Math.max(remaining - 1, 0));
        }, 1000);

        return () => window.clearInterval(timer);
    }, [isRunning]);

    useEffect(() => {
        if (secondsLeft === 0) setIsRunning(false);
    }, [secondsLeft]);

    const startPractice = () => {
        if (secondsLeft === 0) setSecondsLeft(PRACTICE_LENGTH);
        setIsRunning(true);
    };

    const togglePractice = () => {
        if (isRunning) {
            setIsRunning(false);
            return;
        }
        startPractice();
    };

    const resetPractice = () => {
        setIsRunning(false);
        setSecondsLeft(PRACTICE_LENGTH);
    };

    return (
        <main className="peace-page">
            <header className="peace-hero">
                <p className="eyebrow">A PERSONAL PAUSE</p>
                <h1>A little <em>peace.</em></h1>
                <p>Take a quiet moment. When you’re ready, try one minute of slow breathing.</p>
            </header>

            <section className="breathing-card" aria-labelledby="breathing-heading">
                <p className="eyebrow">ONE-MINUTE PRACTICE</p>
                <h2 id="breathing-heading">Breathe at your own pace</h2>
                <p className="breathing-hint">Follow the gentle prompt, or simply breathe in a way that feels comfortable.</p>
                <div className={`breathing-orb${isRunning ? ' is-active' : ''}`} aria-hidden="true">
                    <span>{isRunning ? phase : secondsLeft === 0 ? 'Finished' : 'Ready'}</span>
                </div>
                <p className="breathing-count" role="timer" aria-live="off">
                    {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, '0')}
                </p>
                <div className="breathing-actions">
                    <button className="button button-primary" type="button" onClick={togglePractice}>
                        {secondsLeft === 0 ? 'Start again' : isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button className="button button-quiet" type="button" onClick={resetPractice}>
                        Reset
                    </button>
                </div>
                <p className="peace-note">This is a simple timer, not medical advice. Stop if you feel uncomfortable.</p>
            </section>

            <footer className="peace-footer">
                <p>More personal practices can be added here later.</p>
                <Link className="text-link" to="/">Back to the home page <span aria-hidden="true">→</span></Link>
            </footer>
        </main>
    );
};

export default Peace;
