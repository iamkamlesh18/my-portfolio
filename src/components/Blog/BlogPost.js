import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';
import { allPosts, getPost } from './data';

const BlogPost = () => {
    const { category, post: postSlug } = useParams();
    const [readingProgress, setReadingProgress] = useState(0);
    const article = getPost(category, postSlug);
    const articleIndex = article ? allPosts.findIndex((item) => item.slug === article.slug) : -1;
    const previous = articleIndex > 0 ? allPosts[articleIndex - 1] : null;
    const next = articleIndex >= 0 && articleIndex < allPosts.length - 1 ? allPosts[articleIndex + 1] : null;

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            setReadingProgress(scrollableHeight > 0 ? Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100)) : 100);
        };
        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        return () => window.removeEventListener('scroll', updateProgress);
    }, [category, postSlug]);

    if (!article) {
        return (
            <main className="journal-empty">
                <p className="eyebrow">CHAPTER NOT FOUND</p>
                <h1>That page isn’t in this edition.</h1>
                <Link className="text-link" to="/journal">Browse the reading room →</Link>
            </main>
        );
    }

    return (
        <div className="reader-page">
            <div className="reading-progress" style={{ width: `${readingProgress}%` }} aria-hidden="true" />
            <main className="reader">
                <nav className="reader-breadcrumbs" aria-label="Breadcrumb">
                    <Link to="/journal">Reading room</Link>
                    <span aria-hidden="true">/</span>
                    <Link to={`/journal/${article.categorySlug}`}>{article.category.title}</Link>
                </nav>

                <header className="reader-header">
                    <p className="eyebrow">CHAPTER {article.category.number} · {article.minutes} MIN READ</p>
                    <h1>{article.title}</h1>
                    <p className="reader-deck">{article.summary}</p>
                    <div className="reader-byline">
                        <span className="author-mark">KP</span>
                        <span>Field notes by Kamlesh Patil</span>
                        <span className="reader-meter">{readingProgress}% read</span>
                    </div>
                </header>

                <article className="reader-body">
                    {article.sections.map((section, index) => (
                        <section className="reader-section" key={section.heading}>
                            <span className="reader-section-number">{String(index + 1).padStart(2, '0')}</span>
                            <div>
                                <h2>{section.heading}</h2>
                                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                {section.bullets && (
                                    <ul>
                                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                )}
                            </div>
                        </section>
                    ))}
                    {article.reflection && (
                        <aside className="reflection-card">
                            <p className="eyebrow">A QUESTION TO TAKE WITH YOU</p>
                            <p>{article.reflection}</p>
                        </aside>
                    )}
                </article>

                <footer className="reader-navigation">
                    {previous ? (
                        <Link to={`/journal/${previous.categorySlug}/${previous.slug}`} className="reader-nav-card">
                            <span>← PREVIOUS CHAPTER</span>
                            <strong>{previous.title}</strong>
                        </Link>
                    ) : <span />}
                    {next ? (
                        <Link to={`/journal/${next.categorySlug}/${next.slug}`} className="reader-nav-card next">
                            <span>NEXT CHAPTER →</span>
                            <strong>{next.title}</strong>
                        </Link>
                    ) : <Link className="reader-nav-card next" to="/journal">
                        <span>FINISH THE PATH →</span>
                        <strong>Return to the reading room</strong>
                    </Link>}
                </footer>
            </main>
        </div>
    );
};

export default BlogPost;
