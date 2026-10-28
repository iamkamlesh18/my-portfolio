import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';
import { getPost } from './data';

const BlogPost = () => {
    const { category, post: postSlug } = useParams();
    const [readingProgress, setReadingProgress] = useState(0);
    const article = getPost(category, postSlug);
    const categoryPosts = article?.category.posts ?? [];
    const articleIndex = categoryPosts.findIndex((item) => item.slug === postSlug);
    const previous = articleIndex > 0 ? categoryPosts[articleIndex - 1] : null;
    const next = articleIndex >= 0 && articleIndex < categoryPosts.length - 1 ? categoryPosts[articleIndex + 1] : null;

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
                <p className="eyebrow">NOTE NOT FOUND</p>
                <h1>I couldn’t find that note.</h1>
                <Link className="text-link" to="/journal">Back to QA notes →</Link>
            </main>
        );
    }

    return (
        <div className="reader-page">
            <div className="reading-progress" style={{ width: `${readingProgress}%` }} aria-hidden="true" />
            <main className="reader">
                <nav className="reader-breadcrumbs" aria-label="Breadcrumb">
                    <Link to="/journal">QA notes</Link>
                    <span aria-hidden="true">/</span>
                    <Link to={`/journal/${article.categorySlug}`}>{article.category.title}</Link>
                </nav>

                <header className="reader-header">
                    <p className="eyebrow">{article.category.title} · {article.minutes} MIN READ</p>
                    <h1>{article.title}</h1>
                    <p className="reader-deck">{article.summary}</p>
                    <div className="reader-byline">
                        <span className="author-mark">KP</span>
                        <span>Kamlesh Patil · QA Engineer</span>
                        <span className="reader-meter">{readingProgress}% read</span>
                    </div>
                </header>

                {article.projectName && (
                    <section className="project-overview" aria-labelledby="project-overview-heading">
                        <p className="eyebrow">PROJECT OVERVIEW</p>
                        <h2 id="project-overview-heading">{article.projectName}</h2>
                        <p className="project-domain">{article.domain}</p>
                        <p>{article.result}</p>
                        <h3>Testing focus</h3>
                        <ul className="skill-tags">
                            {article.projectFocus.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        {article.tools.length > 0 && (
                            <>
                                <h3>Tools</h3>
                                <ul className="skill-tags">
                                    {article.tools.map((tool) => <li key={tool}>{tool}</li>)}
                                </ul>
                            </>
                        )}
                    </section>
                )}

                <article className="reader-body" aria-label="Note content">
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
                            <p className="eyebrow">KEY POINT</p>
                            <p>{article.reflection}</p>
                        </aside>
                    )}
                </article>

                <footer className="reader-navigation">
                    {previous ? (
                        <Link to={`/journal/${article.categorySlug}/${previous.slug}`} className="reader-nav-card">
                            <span>← PREVIOUS NOTE</span>
                            <strong>{previous.title}</strong>
                        </Link>
                    ) : <span />}
                    {next ? (
                        <Link to={`/journal/${article.categorySlug}/${next.slug}`} className="reader-nav-card next">
                            <span>NEXT NOTE →</span>
                            <strong>{next.title}</strong>
                        </Link>
                    ) : <Link className="reader-nav-card next" to={`/journal/${article.categorySlug}`}>
                        <span>BACK TO TOPIC →</span>
                        <strong>{article.category.title}</strong>
                    </Link>}
                </footer>
            </main>
        </div>
    );
};

export default BlogPost;
