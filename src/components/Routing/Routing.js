import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';
import Contact from '../Contact/Contact';
import Privacy from '../Privacy-Policy/privacy-policy';
import TermsofService from '../Terms-of-Service/terms-of-service';
import Services from '../Resume/Services';
import Footer from '../Footer/Footer';

const Routing = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<TermsofService />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default Routing;
