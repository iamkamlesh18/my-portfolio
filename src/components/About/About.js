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
                            Experienced Salesforce Developer skilled in Apex, Lightning Web Components (LWC), Salesforce Flows, and SOQL/SOSL. Strong background in Salesforce Administration and delivering scalable solutions.
                        </p>
                    </div>
                    <div className="about-item">
                        <h3>Experience</h3>
                        <p>
                            Senior Software Engineer at Capgemini
                            <br />
                            <i>(Sept 2021 – Present)</i>
                            <br />
                            Leading development on Apex, LWC, Flows, REST integrations, and DevOps/release management for multiple Salesforce environments.
                        </p>
                    </div>
                    <div className="about-item">
                        <h3>Education</h3>
                        <p>
                            BE (Mechanical) -
                            <br />
                            R.C. Patel Institute of Technology, 2019
                            <br />
                            Diploma (Mechanical) -
                            <br />
                            S.S. Patil Institute of Technology, 2016
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
