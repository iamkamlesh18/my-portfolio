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
                        <span>QA ENGINEER</span>
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
                    <NavLink end to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>Skills</NavLink>
                    <NavLink to="/guides" onClick={closeMenu}>Guides</NavLink>
                    <a className="nav-contact" href="mailto:patilkamlesh1811@gmail.com">
                        Contact <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
