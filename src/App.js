import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home/Home';

import About from './components/About/About';
import Skills from './components/About/Skills';
import Services from './components/Services/Services';
import ServiceDetail from './components/Services/ServiceDetail';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Portfolio/Project';
import Blog from './components/Blog/Blog';
import Article from './components/Blog/Article';
import Contact from './components/Contact/Contact';
import ContactForm from './components/Contact/ContactForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/form" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
