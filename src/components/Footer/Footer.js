import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a className="footer-brand" href="#/" aria-label="Kamlesh Patil — return to start">KP<span>.</span></a>
                <p className="footer-thought">My notes on testing, projects, and what I’m learning.</p>
                <div className="footer-links">
                    <a href="#/journal">Read my QA notes</a>
                    <a href="#/projects">My projects</a>
                    <a href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    <a href="https://www.youtube.com/channel/UCzSKULVwWDGQ5fOHIvoMJrw" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
                    <a href="https://www.instagram.com/thekalpesh9/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                </div>
                <p className="footer-copyright">© 2026 Kamlesh Patil · Made for curious quality engineers.</p>
            </div>
        </footer>
    );
};

export default Footer;
