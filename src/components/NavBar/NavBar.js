import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './NavBar.css';
import web3Image from '../img/web3.svg'; // Import the image

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-custom">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={web3Image}
                        alt="Web3 Logo"
                        className="navbar-logo"
                    />
                    <div className="navbar-brand-text">
                        Portfolio
                        <div className="navbar-subtext">Kamlesh Patil</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
