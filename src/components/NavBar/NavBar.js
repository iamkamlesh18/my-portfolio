import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-custom">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div className="navbar-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 200 100">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#007BFF', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#00FF7F', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <text x="10" y="60" fontFamily="'Quicksand', sans-serif" fontSize="72" fill="url(#grad1)" fontWeight="900" style={{ letterSpacing: '2px' }}>
                                &lt;/&gt;
                            </text>
                        </svg>
                    </div>
                    <div className="navbar-brand-text">
                        Portfolio
                        <div className="navbar-subtext">Kamlesh Patil</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/my-portfolio/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/my-portfolio/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/my-portfolio/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/my-portfolio/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/my-portfolio/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
