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
            setReadingProgress(scrollableHeight > 0 ? Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100)) : 0);
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
                <Link className="text-link" to="/guides">Back to guides →</Link>
            </main>
        );
    }

    return (
        <div className="reader-page">
            <div
                className="reading-progress"
                role="progressbar"
                aria-label="Article reading progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={readingProgress}
            >
                <span style={{ width: `${readingProgress}%` }} />
            </div>
            <main className="reader">
                <nav className="reader-breadcrumbs" aria-label="Breadcrumb">
                    <Link to="/guides">Guides</Link>
                    <span aria-hidden="true">/</span>
                    <Link to={`/guides/${article.categorySlug}`}>{article.category.title}</Link>
                </nav>

                <header className="reader-header">
                    <p className="eyebrow">{article.category.title}</p>
                    <h1>{article.title}</h1>
                    <p className="reader-deck">{article.summary}</p>
                    <div className="reader-byline">
                        <span className="author-mark">KP</span>
                        <span>Kamlesh Patil · QA Engineer</span>
                    </div>
                </header>

                {article.projectName && (
                    <section className="project-overview" aria-labelledby="project-overview-heading">
                        <p className="eyebrow">PROJECT OVERVIEW</p>
                        <h2 id="project-overview-heading">{article.projectName}</h2>
                        <p className="project-domain">{article.domain}</p>
                        {article.period && <p><strong>Project period:</strong> {article.period}</p>}
                        {article.products?.length > 0 && (
                            <>
                                <h3>Products and areas</h3>
                                <ul className="project-focus-list">
                                    {article.products.map((product) => <li key={product}>{product}</li>)}
                                </ul>
                            </>
                        )}
                        <p>{article.result}</p>
                        {article.contributions?.length > 0 && (
                            <>
                                <h3>What I worked on</h3>
                                <ul className="project-contributions">
                                    {article.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                                </ul>
                            </>
                        )}
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
                    <aside className="reflection-card">
                        <p className="eyebrow">IN ONE SENTENCE</p>
                        <p>{article.takeaway}</p>
                    </aside>
                    <section className="practice-card" aria-labelledby="practice-heading">
                        <p className="eyebrow">TRY IT YOURSELF</p>
                        <h2 id="practice-heading">Put the idea to work.</h2>
                        <p>{article.exercise}</p>
                    </section>
                </article>

                <footer className="reader-navigation">
                    {previous ? (
                        <Link to={`/guides/${article.categorySlug}/${previous.slug}`} className="reader-nav-card">
                            <span>← PREVIOUS GUIDE</span>
                            <strong>{previous.title}</strong>
                        </Link>
                    ) : <span />}
                    {next ? (
                        <Link to={`/guides/${article.categorySlug}/${next.slug}`} className="reader-nav-card next">
                            <span>NEXT GUIDE →</span>
                            <strong>{next.title}</strong>
                        </Link>
                    ) : <Link className="reader-nav-card next" to={`/guides/${article.categorySlug}`}>
                        <span>BACK TO TOPIC →</span>
                        <strong>{article.category.title}</strong>
                    </Link>}
                </footer>
            </main>
        </div>
    );
};

export default BlogPost;
