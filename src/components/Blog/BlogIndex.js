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
                <p className="eyebrow">MY QA NOTES</p>
                <h1>What I’ve learned<br /><em>about testing.</em></h1>
                <p className="journal-hero-copy">
                    Notes from my projects and studies. I use them to remember what I’ve learned
                    and prepare for interviews.
                </p>
                <div className="journal-stats" aria-label="Library overview">
                    <span><strong>{allPosts.length}</strong> notes</span>
                    <span><strong>{blogData.length}</strong> topics</span>
                    <span>Based on projects and study</span>
                </div>
            </header>

            <main className="journal-main">
                {featuredPost && (
                    <section className="featured-reading" aria-labelledby="featured-heading">
                        <div>
                            <p className="eyebrow">FEATURED PROJECT NOTE · {featuredPost.minutes} MIN READ</p>
                            <h2 id="featured-heading">{featuredPost.title}</h2>
                            <p>{featuredPost.summary}</p>
                            <Link className="text-link" to={`/journal/${featuredPost.categorySlug}/${featuredPost.slug}`}>
                                Read what I learned <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                        <span className="featured-number" aria-hidden="true">06</span>
                    </section>
                )}

                <section className="learning-paths" aria-labelledby="paths-heading">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">BROWSE BY TOPIC</p>
                            <h2 id="paths-heading">What do you want to learn?</h2>
                        </div>
                        <p>Choose a topic to find related notes.</p>
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
                            <p className="eyebrow">ALL MY NOTES</p>
                            <h2 id="library-heading">Find a topic</h2>
                        </div>
                        <label className="search-field">
                            <span className="visually-hidden">Search notes</span>
                            <span aria-hidden="true">⌕</span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search my notes…"
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
                        <p className="empty-state">No notes match “{search}”. Try another search.</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default BlogIndex;
