import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a className="footer-brand" href="#/" aria-label="Kamlesh Patil — return to start">KP<span>.</span></a>
                <p className="footer-thought">My personal interview preparation for software testing.</p>
                <div className="footer-links">
                    <a href="#/journal">Open my interview book</a>
                    <a href="#/projects">Rainbow framework Q&amp;A</a>
                </div>
                <p className="footer-copyright">© 2026 Kamlesh Patil · For my interview preparation.</p>
            </div>
        </footer>
    );
};

export default Footer;
