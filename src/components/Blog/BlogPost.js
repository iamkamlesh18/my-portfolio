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
                <h1>I couldn’t find that interview chapter.</h1>
                <Link className="text-link" to="/journal">Back to my interview book →</Link>
            </main>
        );
    }

    return (
        <div className="reader-page">
            <div className="reading-progress" style={{ width: `${readingProgress}%` }} aria-hidden="true" />
            <main className="reader">
                <nav className="reader-breadcrumbs" aria-label="Breadcrumb">
                    <Link to="/journal">Interview book</Link>
                    <span aria-hidden="true">/</span>
                    <Link to={`/journal/${article.categorySlug}`}>{article.category.title}</Link>
                </nav>

                <header className="reader-header">
                    <p className="eyebrow">{article.category.title} · INTERVIEW QUESTION</p>
                    <h1>{article.question}</h1>
                    <p className="eyebrow">A SIMPLE ANSWER</p>
                    <p className="reader-deck">{article.interviewAnswer || article.summary}</p>
                    <div className="reader-byline">
                        <span className="author-mark">KP</span>
                        <span>My interview preparation</span>
                        <span className="reader-meter">{readingProgress}% read</span>
                    </div>
                </header>

                <article className="reader-body">
                    {article.sections.map((section, index) => (
                        <section className="reader-section" key={section.heading}>
                            <span className="reader-section-number">{String(index + 1).padStart(2, '0')}</span>
                            <div>
                                <p className="eyebrow">QUESTION {String(index + 1).padStart(2, '0')}</p>
                                <h2>{section.question}</h2>
                                <p className="answer-label">SIMPLE ANSWER</p>
                                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                {section.bullets && (
                                    <ul>
                                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                )}
                            </div>
                        </section>
                    ))}
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
                        <span>BACK TO INTERVIEW BOOK →</span>
                        <strong>Choose another chapter</strong>
                    </Link>}
                </footer>
            </main>
        </div>
    );
};

export default BlogPost;
