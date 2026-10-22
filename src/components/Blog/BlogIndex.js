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
                <p className="eyebrow">THE QUALITY ENGINEERING FIELD GUIDE</p>
                <h1>A practical book for<br /><em>thinking testers.</em></h1>
                <p className="journal-hero-copy">
                    Not another list of tools. A growing, experience-led guide to understanding
                    risk, building useful automation, and doing the work well with a team.
                </p>
                <div className="journal-stats" aria-label="Library overview">
                    <span><strong>{allPosts.length}</strong> chapters</span>
                    <span><strong>{blogData.length}</strong> learning paths</span>
                    <span>Built from real project lessons</span>
                </div>
            </header>

            <main className="journal-main">
                {featuredPost && (
                    <section className="featured-reading" aria-labelledby="featured-heading">
                        <div>
                            <p className="eyebrow">FEATURED FIELD NOTE · {featuredPost.minutes} MIN READ</p>
                            <h2 id="featured-heading">{featuredPost.title}</h2>
                            <p>{featuredPost.summary}</p>
                            <Link className="text-link" to={`/journal/${featuredPost.categorySlug}/${featuredPost.slug}`}>
                                Read the project story <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                        <span className="featured-number" aria-hidden="true">06</span>
                    </section>
                )}

                <section className="learning-paths" aria-labelledby="paths-heading">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">START WITH A PATH</p>
                            <h2 id="paths-heading">Choose what to explore</h2>
                        </div>
                        <p>Each chapter builds an idea you can take back to your own team.</p>
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
                            <p className="eyebrow">THE READING ROOM</p>
                            <h2 id="library-heading">Browse all chapters</h2>
                        </div>
                        <label className="search-field">
                            <span className="visually-hidden">Search chapters</span>
                            <span aria-hidden="true">⌕</span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search ideas, topics, stories…"
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
                        <p className="empty-state">No chapters match “{search}”. Try another topic.</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default BlogIndex;
