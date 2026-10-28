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
    const featuredPost = allPosts.find((item) => item.slug === 'cooperative-bank-automation');

    return (
        <div className="journal-page">
            <header className="journal-hero">
                <p className="eyebrow">QA NOTES</p>
                <h1>Testing and automation<br /><em>made clear.</em></h1>
                <p className="journal-hero-copy">
                    Simple guides to testing, automation, APIs, and real project work.
                </p>
                <div className="journal-stats" aria-label="Library overview">
                    <span><strong>{allPosts.length}</strong> notes</span>
                    <span><strong>{blogData.length}</strong> topics</span>
                    <span>Practical examples</span>
                </div>
            </header>

            <main className="journal-main">
                {featuredPost && (
                    <section className="featured-reading" aria-labelledby="featured-heading">
                        <div>
                            <p className="eyebrow">FEATURED PROJECT · {featuredPost.minutes} MIN READ</p>
                            <h2 id="featured-heading">{featuredPost.title}</h2>
                            <p>{featuredPost.summary}</p>
                            <Link className="text-link" to={`/journal/${featuredPost.categorySlug}/${featuredPost.slug}`}>
                                View project details <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                        <span className="featured-number" aria-hidden="true">06</span>
                    </section>
                )}

                <section className="learning-paths" aria-labelledby="paths-heading">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">TOPICS</p>
                            <h2 id="paths-heading">Browse QA topics.</h2>
                        </div>
                        <p>Pick a topic to see related notes.</p>
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
                                <span className="path-count">{category.posts.length} notes <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="chapter-library" aria-labelledby="library-heading">
                    <div className="section-heading library-heading">
                        <div>
                            <p className="eyebrow">ALL NOTES</p>
                            <h2 id="library-heading">Search the notes.</h2>
                        </div>
                        <label className="search-field">
                            <span className="visually-hidden">Search QA notes</span>
                            <span aria-hidden="true">⌕</span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search testing, tools, projects…"
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
                                        <span className="chapter-category">{item.category.title}</span>
                                        <strong>{item.title}</strong>
                                        <span>{item.summary}</span>
                                    </span>
                                    <span className="chapter-time">{item.minutes} min <span aria-hidden="true">↗</span></span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="empty-state">No notes match “{search}”. Try another word.</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default BlogIndex;
