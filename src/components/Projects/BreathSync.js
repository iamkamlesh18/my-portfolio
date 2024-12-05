import React, { useState, useEffect, useMemo } from "react";
import "./BreathworkTimer.css";

const breathworkOptions = {
  beginner: { label: "Beginner (1:1:1)", inhale: 4, hold: 4, exhale: 4 },
  intermediate: { label: "Intermediate (4:16:8)", inhale: 4, hold: 16, exhale: 8 },
  advanced: { label: "Advanced (6:24:12)", inhale: 6, hold: 24, exhale: 12 },
  ratio141: { label: "1:4:1 (Anuloma Viloma Start)", inhale: 4, hold: 16, exhale: 4 },
  ratio251: { label: "1:5:1", inhale: 5, hold: 20, exhale: 5 },
  ratio362: { label: "1:6:2", inhale: 6, hold: 24, exhale: 12 },
};

const BreathworkTimer = () => {
  const [selectedPattern, setSelectedPattern] = useState("beginner");
  const [pattern, setPattern] = useState(breathworkOptions.beginner);
  const [phase, setPhase] = useState("Inhale");
  const [timeLeft, setTimeLeft] = useState(pattern.inhale);
  const [isRunning, setIsRunning] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);

  // Define phases using useMemo to avoid recomputation
  const phases = useMemo(() => [
    { name: "Inhale", duration: pattern.inhale },
    { name: "Hold", duration: pattern.hold },
    { name: "Exhale", duration: pattern.exhale },
  ], [pattern]);

  // Play sound
  const playSound = () => {
    try {
      const audio = new Audio(process.env.PUBLIC_URL + "/beep.mp3");
      audio.play().catch((error) => console.error("Audio playback failed:", error));
    } catch (error) {
      console.error("Audio playback error:", error);
    }
  };

  // Timer logic with useEffect
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          playSound();
          const nextPhaseIndex = (phaseIndex + 1) % phases.length;
          setPhaseIndex(nextPhaseIndex);
          setPhase(phases[nextPhaseIndex].name);
          return phases[nextPhaseIndex].duration;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, phaseIndex, phases]);

  const handleStartStop = () => setIsRunning((prev) => !prev);

  const handleReset = () => {
    setIsRunning(false);
    setPhaseIndex(0);
    setPhase("Inhale");
    setTimeLeft(phases[0].duration);
  };

  const handlePatternChange = (newPattern) => {
    setSelectedPattern(newPattern);
    setPattern(breathworkOptions[newPattern]);
    setPhaseIndex(0);
    setPhase("Inhale");
    setTimeLeft(breathworkOptions[newPattern].inhale);
    setIsRunning(false);
  };

  const progressPercentage =
    ((phases[phaseIndex].duration - timeLeft) / phases[phaseIndex].duration) * 100;

  return (
    <div className="breathwork-timer-container">
      <h2>Breathwork Timer</h2>
      <div>
        <label>Select Breathwork Pattern:</label>
        <select
          value={selectedPattern}
          onChange={(e) => handlePatternChange(e.target.value)}
        >
          {Object.entries(breathworkOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value.label}
            </option>
          ))}
        </select>
      </div>
      <h3>Phase: {phase}</h3>
      <div className="circle-wrapper">
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(
              #4caf50 ${progressPercentage * 3.6}deg,
              #ddd ${progressPercentage * 3.6}deg
            )`,
          }}
        >
          <div className="circle-content">{timeLeft}s</div>
        </div>
      </div>
      <button onClick={handleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default BreathworkTimer;
