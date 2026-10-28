import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a className="footer-brand" href="#/" aria-label="Kamlesh Patil — return to start">KP<span>.</span></a>
                <p className="footer-thought">QA Engineer · Software testing and automation</p>
                <div className="footer-links">
                    <a href="#/journal">QA notes</a>
                    <a href="#/projects">Projects</a>
                    <a href="#/about">Skills</a>
                    <a href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
                <p className="footer-copyright">© 2026 Kamlesh Patil</p>
            </div>
        </footer>
    );
};

export default Footer;
