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
    const simpleDefinitions = [
        ['Bug', 'Something in the software does not work as expected.'],
        ['Test case', 'Steps, information, and an expected result used to check a feature.'],
        ['Regression test', 'A check you run again after a change to make sure something that worked still works.'],
        ['Smoke test', 'A quick check that the most important parts of a new build start and work.'],
        ['API', 'A way for two pieces of software to ask each other for information or an action.'],
        ['Test automation', 'Instructions that let a computer repeat a check and report the result.']
    ];
    return (
        <div className="journal-page">
            <header className="journal-hero">
                <p className="eyebrow">TESTING GUIDES</p>
                <h1>Learn testing<br /><em>one clear step at a time.</em></h1>
                <p className="journal-hero-copy">
                    New to testing or already working in QA? Start with the basics, follow simple examples,
                    and see how testing works in real projects.
                </p>
                <div className="journal-stats" aria-label="Library overview">
                    <span><strong>{allPosts.length}</strong><span>guides</span></span>
                    <span><strong>{blogData.length}</strong><span>topics</span></span>
                    <span><strong>Start anywhere</strong><span>read at your pace</span></span>
                </div>
            </header>

            <main className="journal-main">
                {featuredPost && (
                    <section className="featured-reading" aria-labelledby="featured-heading">
                        <div>
                            <p className="eyebrow">START WITH A REAL PROJECT</p>
                            <h2 id="featured-heading">{featuredPost.title}</h2>
                            <p>{featuredPost.summary}</p>
                            <Link className="text-link" to={`/guides/${featuredPost.categorySlug}/${featuredPost.slug}`}>
                                View project details <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                        <span className="featured-number" aria-hidden="true">06</span>
                    </section>
                )}

                <section className="guide-start" aria-labelledby="guide-start-heading">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">FIND YOUR STARTING POINT</p>
                            <h2 id="guide-start-heading">Pick what feels right.</h2>
                        </div>
                    </div>
                    <div className="guide-start-grid">
                        <Link to="/guides/foundations">
                            <strong>I’m new to testing</strong>
                            <span>Start with the basic ideas and simple examples.</span>
                            <span className="text-link">Start at the beginning →</span>
                        </Link>
                        <Link to="/guides/automation">
                            <strong>I want to learn automation</strong>
                            <span>See what to automate and how to keep tests reliable.</span>
                            <span className="text-link">Explore automation →</span>
                        </Link>
                        <Link to="/guides/project-stories">
                            <strong>I want to see real work</strong>
                            <span>Read about banking and fleet products I tested.</span>
                            <span className="text-link">See project examples →</span>
                        </Link>
                    </div>
                </section>

                <section className="guide-glossary" aria-labelledby="glossary-heading">
                    <p className="eyebrow">NEW TO TESTING?</p>
                    <h2 id="glossary-heading">A few words in plain English.</h2>
                    <dl>
                        {simpleDefinitions.map(([term, definition]) => (
                            <div key={term}>
                                <dt>{term}</dt>
                                <dd>{definition}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section className="learning-paths" aria-labelledby="paths-heading">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">PICK A TOPIC</p>
                            <h2 id="paths-heading">Explore all topics.</h2>
                        </div>
                        <p>Each topic starts with the idea, shows examples, and builds toward real QA work.</p>
                    </div>
                    <div className="path-grid">
                        {blogData.map((category) => (
                            <Link
                                className="path-card"
                                key={category.slug}
                                to={`/guides/${category.slug}`}
                            >
                                <span className="path-number">{category.number}</span>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="path-count">{category.posts.length} guides <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="chapter-library" aria-labelledby="library-heading">
                    <div className="section-heading library-heading">
                        <div>
                            <p className="eyebrow">ALL GUIDES</p>
                            <h2 id="library-heading">Browse every guide</h2>
                        </div>
                        <label className="search-field">
                            <span className="visually-hidden">Search testing guides</span>
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
                                    to={`/guides/${item.categorySlug}/${item.slug}`}
                                >
                                    <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="chapter-copy">
                                        <span className="chapter-category">{item.category.title}</span>
                                        <strong>{item.title}</strong>
                                        <span>{item.summary}</span>
                                    </span>
                                    <span className="chapter-time">Open guide <span aria-hidden="true">↗</span></span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="empty-state">No guides match “{search}”. Try another word.</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default BlogIndex;
