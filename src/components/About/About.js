import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <section>
                <h2 className="about-heading">About Us</h2>
                <div className="about-info">
                    <div className="about-item">
                        <h3>Our Mission</h3>
                        <p>We are dedicated to delivering exceptional service and innovative solutions to our clients.</p>
                    </div>
                    <div className="about-item">
                        <h3>Our Team</h3>
                        <p>Our team consists of skilled professionals who are passionate about their work and committed to achieving excellence.</p>
                    </div>
                    <div className="about-item">
                        <h3>Our Values</h3>
                        <p>Integrity, Innovation, and Customer Satisfaction are the core values that guide our operations and drive our success.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
