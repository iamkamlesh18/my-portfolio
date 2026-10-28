import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import BlogCategory from '../Blog/BlogCategory';
import BlogPost from '../Blog/BlogPost';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Peace from '../Projects/Peace';
import SiteReference from '../SiteReference/SiteReference';
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
        let pageTitle = 'QA Engineer';

        if (section === 'guides' || section === 'journal' || section === 'blog') {
            if (postSlug) {
                pageTitle = getPost(categorySlug, postSlug)?.title || 'Note not found';
            } else if (categorySlug) {
                pageTitle = blogData.find((category) => category.slug === categorySlug)?.title || 'Topic not found';
            } else {
                pageTitle = 'Testing Guides';
            }
        } else if (section === 'projects') {
            pageTitle = 'Projects';
        } else if (section === 'peace') {
            pageTitle = 'Peace';
        } else if (section === 'site-notes') {
            pageTitle = 'Personal Site Reference';
        } else if (section === 'about') {
            pageTitle = 'Skills and Experience';
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
        <h1>I couldn’t find that page.</h1>
        <a className="text-link" href="#/">Back to the home page →</a>
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
            <Route path="/guides" element={<Blog />} />
            <Route path="/guides/:category" element={<BlogCategory />} />
            <Route path="/guides/:category/:post" element={<BlogPost />} />
            <Route path="/journal" element={<Blog />} />
            <Route path="/journal/:category" element={<BlogCategory />} />
            <Route path="/journal/:category/:post" element={<BlogPost />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:category" element={<BlogCategory />} />
            <Route path="/blog/:category/:post" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/peace" element={<Peace />} />
            <Route path="/site-notes" element={<SiteReference />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </HashRouter>
);

export default Routing;
