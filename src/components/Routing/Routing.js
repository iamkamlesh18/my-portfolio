import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
// removed unused pages (Blog, Services, Yogasana) to simplify site
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import BlogCategory from '../Blog/BlogCategory';
import BlogPost from '../Blog/BlogPost';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import CurrencyConverter from '../Projects/CurrencyConverter';
import BreathSync from '../Projects/BreathSync';

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
                <Route path="/my-portfolio/about" element={<About />} />
                <Route path="/my-portfolio/projects/currencyconverter" element={<CurrencyConverter/>} />
                <Route path="/my-portfolio/projects/BreathSync" element={<BreathSync/>} />
                <Route path="/my-portfolio/blog/:category" element={<BlogCategory/>} />
                <Route path="/my-portfolio/blog/:category/:post" element={<BlogPost/>} />
            </Routes>
            
            <Footer />
        </Router>
    );
};

export default Routing;
