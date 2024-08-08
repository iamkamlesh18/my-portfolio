import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
                <p>
                    <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
