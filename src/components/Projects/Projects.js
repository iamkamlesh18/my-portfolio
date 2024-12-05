import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="projects">
            <section>
                <h2 className="projects-heading">Projects</h2>
                <div className="project-list">

                    <Link to="/my-portfolio/projects/currencyconverter" className="no-underline">
                        <div className="project-item">
                            <h3>Currency Converter</h3>
                            <p>Convert the Currency</p>
                        </div>
                    </Link>
                    
                    <Link to="/my-portfolio/projects/BreathSync" className="no-underline">
                        <div className="project-item">
                            <h3>BreathSync</h3>
                            <p>BreathSync Meditation Counter</p>
                        </div>
                    </Link>

                    <Link to="/my-portfolio/projects/Yogasana" className="no-underline">
                        <div className="project-item">
                            <h3>Yogasana</h3>
                            <p>Simple Yogic Asanas</p>
                        </div>
                    </Link>

                    <div className="project-item">
                        <h3>Project Two</h3>
                        <p>A description of the second projec</p>
                    </div>
                    <div className="project-item">
                        <h3>Project Three</h3>
                        <p>Details about the third project, focusing on the challenges faced and how they were overcome.</p>
                    </div>
                    <div className="project-item">
                        <h3>Project Four</h3>
                        <p>Information on the fourth project, such as the technologies used and the project's impact.</p>
                    </div>
                    <div className="project-item">
                        <h3>Project Five</h3>
                        <p>An overview of the fifth project, including objectives and outcomes.</p>
                    </div>
                    <div className="project-item">
                        <h3>Project Six</h3>
                        <p>Description of the sixth project, highlighting the innovative aspects and results achieved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
