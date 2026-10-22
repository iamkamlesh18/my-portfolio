import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Main navigation">
                <Link className="brand" to="/" onClick={closeMenu} aria-label="Kamlesh Patil — home">
                    <span className="brand-mark">KP<span>.</span></span>
                    <span className="brand-copy">
                        <strong>Kamlesh Patil</strong>
                        <span>QUALITY ENGINEERING NOTES</span>
                    </span>
                </Link>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                </button>
                <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
                    <NavLink end to="/" onClick={closeMenu}>Start here</NavLink>
                    <NavLink to="/journal" onClick={closeMenu}>The field guide</NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>Project stories</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About Kamlesh</NavLink>
                    <a className="nav-contact" href="https://wa.me/917770000347?text=Hi%20Kamlesh%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noopener noreferrer">
                        Say hello <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
