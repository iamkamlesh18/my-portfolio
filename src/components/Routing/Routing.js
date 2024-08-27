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
                <Route path="/my-portfolio/" element={<Home />} />
                <Route path="/my-portfolio/home" element={<Home />} />
                <Route path="/my-portfolio/blog" element={<Blog />} />
                <Route path="/my-portfolio/projects" element={<Projects />} />
                <Route path="/my-portfolio/services" element={<Services />} />
                <Route path="/my-portfolio/contact" element={<Contact />} />
                <Route path="/my-portfolio/privacy-policy" element={<Privacy />} />
                <Route path="/my-portfolio/terms-of-service" element={<TermsofService />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default Routing;
