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
                            <p>Utility for quick currency conversions.</p>
                        </div>
                    </Link>

                    <Link to="/my-portfolio/projects/BreathSync" className="no-underline">
                        <div className="project-item">
                            <h3>BreathSync</h3>
                            <p>Breathwork timer and meditation helper.</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
