import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { allPosts, blogData } from './data';

const BlogIndex = () => {
    const [search, setSearch] = useState('');
    const normalizedSearch = search.trim().toLowerCase();
    const filteredPosts = useMemo(
        () => normalizedSearch
            ? allPosts.filter((item) =>
                `${item.title} ${item.summary} ${item.category.title}`.toLowerCase().includes(normalizedSearch)
            )
            : allPosts,
        [normalizedSearch]
    );
    const featuredPost = allPosts.find((item) => item.slug === 'rainbow-framework');

    return (
        <div className="journal-page">
            <header className="journal-hero">
                <p className="eyebrow">MY QA NOTES</p>
                <h1>My interview book<br /><em>for quality assurance.</em></h1>
                <p className="journal-hero-copy">
                    A chapter-wise question-and-answer guide for my own interview preparation,
                    from testing basics through Java, Selenium, Serenity, and the Rainbow framework.
                </p>
                <div className="journal-stats" aria-label="Library overview">
                    <span><strong>{allPosts.length}</strong> interview chapters</span>
                    <span><strong>{blogData.length}</strong> learning stages</span>
                    <span>For my personal preparation</span>
                </div>
            </header>

            <main className="journal-main">
                {featuredPost && (
                    <section className="featured-reading" aria-labelledby="featured-heading">
                        <div>
                            <p className="eyebrow">PROJECT INTERVIEW · RAINBOW FRAMEWORK</p>
                            <h2 id="featured-heading">{featuredPost.title}</h2>
                            <p>{featuredPost.interviewAnswer}</p>
                            <Link className="text-link" to={`/journal/${featuredPost.categorySlug}/${featuredPost.slug}`}>
                                Read the interview answers <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                        <span className="featured-number" aria-hidden="true">06</span>
                    </section>
                )}

                <section className="learning-paths" aria-labelledby="paths-heading">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">CHAPTERS, BASIC TO ADVANCED</p>
                            <h2 id="paths-heading">Choose an interview topic</h2>
                        </div>
                        <p>Each chapter is organized around interview questions and simple answers.</p>
                    </div>
                    <div className="path-grid">
                        {blogData.map((category) => (
                            <Link
                                className="path-card"
                                key={category.slug}
                                to={`/journal/${category.slug}`}
                            >
                                <span className="path-number">{category.number}</span>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="path-count">{category.posts.length} chapters <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="chapter-library" aria-labelledby="library-heading">
                    <div className="section-heading library-heading">
                        <div>
                            <p className="eyebrow">ALL INTERVIEW CHAPTERS</p>
                            <h2 id="library-heading">Find a question</h2>
                        </div>
                        <label className="search-field">
                            <span className="visually-hidden">Search interview chapters</span>
                            <span aria-hidden="true">⌕</span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search interview topics…"
                            />
                        </label>
                    </div>
                    {filteredPosts.length ? (
                        <div className="chapter-list">
                            {filteredPosts.map((item, index) => (
                                <Link
                                    className="chapter-row"
                                    key={`${item.categorySlug}/${item.slug}`}
                                    to={`/journal/${item.categorySlug}/${item.slug}`}
                                >
                                    <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="chapter-copy">
                                        <span className="chapter-category">{item.category.title} · QUESTION</span>
                                        <strong>{item.title}</strong>
                                        <span>{item.question}</span>
                                    </span>
                                    <span className="chapter-time">Q&amp;A <span aria-hidden="true">↗</span></span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="empty-state">No interview chapters match “{search}”. Try another search.</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default BlogIndex;
