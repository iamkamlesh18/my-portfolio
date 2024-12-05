import React from 'react';
import './YogasanaProject.css';

const YogasanaProject = () => {
    return (
        <div className="yogasana-project">
            <h1>Yogasana Project</h1>
            <p>Welcome to the Yogasana project, where we explore simple yet effective yogic asanas to improve physical and mental well-being.</p>

            <div className="yogasana-container">
                <h2>Yoga Poses</h2>

                {/* Child's Pose */}
                <div className="pose-item">
                    <h3>Child's Pose (Balasana)</h3>
                    <div className="pose-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
                            <circle cx="50" cy="30" r="8" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <ellipse cx="50" cy="50" rx="20" ry="12" fill="#D4A5A5" stroke="black" strokeWidth="1"/>
                            <line x1="25" y1="45" x2="10" y2="60" stroke="black" strokeWidth="2"/>
                            <line x1="75" y1="45" x2="90" y2="60" stroke="black" strokeWidth="2"/>
                            <line x1="40" y1="60" x2="40" y2="75" stroke="black" strokeWidth="2"/>
                            <line x1="60" y1="60" x2="60" y2="75" stroke="black" strokeWidth="2"/>
                            <ellipse cx="40" cy="75" rx="5" ry="3" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <ellipse cx="60" cy="75" rx="5" ry="3" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <path d="M43,30 Q50,15 57,30" fill="orange" stroke="black" strokeWidth="1"/>
                        </svg>
                    </div>
                    <p>A calming posture, perfect for relaxation and stretching.</p>
                </div>

                {/* Cat-Cow Pose */}
                <div className="pose-item">
                    <h3>Cat-Cow Pose (Marjaryasana-Bitilasana)</h3>
                    <div className="pose-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
                            <circle cx="50" cy="30" r="8" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <line x1="50" y1="50" x2="30" y2="40" stroke="black" strokeWidth="2"/>
                            <line x1="50" y1="50" x2="70" y2="40" stroke="black" strokeWidth="2"/>
                            <ellipse cx="50" cy="60" rx="20" ry="12" fill="#D4A5A5" stroke="black" strokeWidth="1"/>
                            <line x1="40" y1="60" x2="40" y2="75" stroke="black" strokeWidth="2"/>
                            <line x1="60" y1="60" x2="60" y2="75" stroke="black" strokeWidth="2"/>
                            <ellipse cx="40" cy="75" rx="5" ry="3" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <ellipse cx="60" cy="75" rx="5" ry="3" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <path d="M43,30 Q50,15 57,30" fill="orange" stroke="black" strokeWidth="1"/>
                        </svg>
                    </div>
                    <p>Helps with flexibility and spinal alignment.</p>
                </div>

                {/* Seated Forward Fold */}
                <div className="pose-item">
                    <h3>Seated Forward Fold (Paschimottanasana)</h3>
                    <div className="pose-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
                            <circle cx="50" cy="30" r="8" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <line x1="50" y1="30" x2="50" y2="60" stroke="black" strokeWidth="2"/>
                            <line x1="50" y1="60" x2="40" y2="80" stroke="black" strokeWidth="2"/>
                            <line x1="50" y1="60" x2="60" y2="80" stroke="black" strokeWidth="2"/>
                            <ellipse cx="50" cy="80" rx="10" ry="6" fill="#D4A5A5" stroke="black" strokeWidth="1"/>
                            <ellipse cx="40" cy="80" rx="5" ry="3" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <ellipse cx="60" cy="80" rx="5" ry="3" fill="#F6C6A1" stroke="black" strokeWidth="1"/>
                            <path d="M43,30 Q50,15 57,30" fill="orange" stroke="black" strokeWidth="1"/>
                        </svg>
                    </div>
                    <p>A stretch for the back and hamstrings, promoting flexibility.</p>
                </div>
            </div>
        </div>
    );
};

export default YogasanaProject;
