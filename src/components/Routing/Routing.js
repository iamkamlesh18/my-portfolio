import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import BlogCategory from '../Blog/BlogCategory';
import BlogPost from '../Blog/BlogPost';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import CurrencyConverter from '../Projects/CurrencyConverter';
import BreathSync from '../Projects/BreathSync';
import { blogData, getPost } from '../Blog/data';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const PageMetadata = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        const [section, categorySlug, postSlug] = pathname.split('/').filter(Boolean);
        let pageTitle = 'Kamlesh Patil — Quality Engineering Field Guide';

        if (section === 'journal' || section === 'blog') {
            if (postSlug) {
                pageTitle = getPost(categorySlug, postSlug)?.title || 'Chapter not found';
            } else if (categorySlug) {
                pageTitle = blogData.find((category) => category.slug === categorySlug)?.title || 'Learning path not found';
            } else {
                pageTitle = 'The Field Guide';
            }
        } else if (section === 'projects') {
            pageTitle = categorySlug === 'currencyconverter'
                ? 'Currency Converter'
                : categorySlug === 'BreathSync'
                    ? 'BreathSync'
                    : 'Project Stories';
        } else if (section === 'about') {
            pageTitle = 'About Kamlesh';
        } else if (section && section !== 'home') {
            pageTitle = 'Page not found';
        }

        document.title = `${pageTitle} — Kamlesh Patil`;
    }, [pathname]);

    return null;
};

const NotFound = () => (
    <main className="journal-empty">
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>This page isn’t in the field guide.</h1>
        <a className="text-link" href="#/">Return to the beginning →</a>
    </main>
);

const Routing = () => (
    <HashRouter>
        <ScrollToTop />
        <PageMetadata />
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/journal" element={<Blog />} />
            <Route path="/journal/:category" element={<BlogCategory />} />
            <Route path="/journal/:category/:post" element={<BlogPost />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:category" element={<BlogCategory />} />
            <Route path="/blog/:category/:post" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/currencyconverter" element={<CurrencyConverter />} />
            <Route path="/projects/BreathSync" element={<BreathSync />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </HashRouter>
);

export default Routing;
