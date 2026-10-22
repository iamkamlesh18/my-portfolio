import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { allPosts, blogData } from '../Blog/data';

const Home = () => {
    const featured = allPosts.find((item) => item.slug === 'cooperative-bank-automation');
    const firstPrinciples = [
        { number: '01', title: 'Understand the business', text: 'Before a test case, ask what problem is being solved and what could happen if it fails.' },
        { number: '02', title: 'Reduce risk, not just bugs', text: 'Testing gives a team evidence to make better decisions before customers feel the impact.' },
        { number: '03', title: 'Build for the next change', text: 'Good automation is clear, reusable, and synchronized with the application—not a pile of scripts.' }
    ];

    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-content">
                    <p className="eyebrow"><span className="status-dot" /> NOTES FROM THE QUALITY ENGINEERING JOURNEY</p>
                    <h1>Good testing starts<br />with <em>better questions.</em></h1>
                    <p className="hero-description">
                        I’m Kamlesh Patil. I write about the real work behind reliable software:
                        understanding business risk, learning from failures, and building automation
                        that teams can trust.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/journal">Explore the field guide <span aria-hidden="true">↗</span></Link>
                        <Link className="button button-quiet" to="/about">Meet the engineer <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="hero-proof">
                        <span className="hero-monogram">KP</span>
                        <p><strong>4.5+ years in quality engineering</strong><br />Banking · Financial services · Fleet management</p>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <div className="art-orbit orbit-one" />
                    <div className="art-orbit orbit-two" />
                    <div className="art-center">
                        <span>QUALITY</span>
                        <strong>is a<br /><em>team sport.</em></strong>
                    </div>
                    <span className="art-note note-one">Curiosity</span>
                    <span className="art-note note-two">Evidence</span>
                    <span className="art-note note-three">Confidence</span>
                </div>
                <span className="hero-index" aria-hidden="true">FIELD NOTES / 2026</span>
            </section>

            <main>
                <section className="principles-section section-wrap">
                    <div className="section-intro">
                        <p className="eyebrow">A PRACTICAL POINT OF VIEW</p>
                        <h2>Tools change.<br /><em>How we think matters.</em></h2>
                    </div>
                    <div className="principle-list">
                        {firstPrinciples.map((item) => (
                            <article className="principle-item" key={item.number}>
                                <span>{item.number}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                                <span className="principle-arrow" aria-hidden="true">↗</span>
                            </article>
                        ))}
                    </div>
                </section>

                {featured && (
                    <section className="home-featured">
                        <div className="featured-inner">
                            <div className="featured-art" aria-hidden="true">
                                <span>THE<br />PROJECT<br />NOTEBOOK</span>
                                <span className="notebook-mark">06</span>
                            </div>
                            <div className="featured-copy">
                                <p className="eyebrow">A STORY FROM THE FIELD · {featured.minutes} MIN READ</p>
                                <h2>{featured.title}</h2>
                                <p>{featured.summary}</p>
                                <Link className="text-link" to={`/journal/${featured.categorySlug}/${featured.slug}`}>
                                    Read the cooperative bank story <span aria-hidden="true">↗</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                <section className="home-paths section-wrap">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">A BOOK THAT GROWS WITH YOU</p>
                            <h2>Follow your curiosity.</h2>
                        </div>
                        <Link className="text-link" to="/journal">All chapters <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className="home-path-grid">
                        {blogData.slice(0, 4).map((category) => (
                            <Link className="home-path-card" key={category.slug} to={`/journal/${category.slug}`}>
                                <span>{category.number} / LEARNING PATH</span>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="path-open">Explore path <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="home-quote">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <blockquote>
                        The purpose of testing isn’t to prove software works.
                        It’s to understand where it can fail before customers suffer.
                    </blockquote>
                    <p>KAMLESH PATIL <span>· QUALITY ENGINEERING NOTES</span></p>
                </section>
            </main>
        </div>
    );
};

export default Home;
