import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Privacy from '../Privacy-Policy/privacy-policy';
import TermsofService from '../Terms-of-Service/terms-of-service';

const Routing = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            
            <Routes>
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<TermsofService />} />
            </Routes>

            <Footer/>
        </Router>
    );
};

export default Routing;