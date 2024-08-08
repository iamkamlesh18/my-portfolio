import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-link">Portfolio</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
