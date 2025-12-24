import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <section>
                <h2 className="about-heading">About Me</h2>
                <div className="about-info">
                    <div className="about-item">
                        <h3>Profile</h3>
                        <p>
                            Salesforce Developer with a strong foundation in Salesforce Administration and hands-on
                            experience in Apex, Lightning Web Components (LWC), Salesforce Flows, and SOQL/SOSL.
                        </p>
                    </div>
                    <div className="about-item">
                        <h3>Experience</h3>
                        <p>
                            Senior Software Engineer (Salesforce) — Capgemini (Sept 2021 – Present). Worked on Apex,
                            LWC, Flows, REST integrations, and DevOps/release management across environments.
                        </p>
                    </div>
                    <div className="about-item">
                        <h3>Education & Goals</h3>
                        <p>
                            BE (Mechanical). Currently expanding expertise in OmniStudio and Salesforce CPQ and
                            actively seeking opportunities to grow as a Salesforce Developer / Platform Engineer.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
