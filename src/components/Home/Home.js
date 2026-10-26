import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { allPosts, blogData } from '../Blog/data';

const Home = () => {
    const featured = allPosts.find((item) => item.slug === 'cooperative-bank-automation');
    const firstPrinciples = [
        { number: '01', title: 'Learn how it should work', text: 'Understand the user, the goal, and what could go wrong before you start testing.' },
        { number: '02', title: 'Check what matters most', text: 'Focus on problems that could affect customers, money, or daily work.' },
        { number: '03', title: 'Make automation useful', text: 'Write checks that are clear, reliable, and easy for the team to update.' }
    ];

    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-content">
                    <p className="eyebrow"><span className="status-dot" /> MY QA NOTES AND PROJECT EXPERIENCE</p>
                    <h1>What I’ve learned<br />about <em>testing software.</em></h1>
                    <p className="hero-description">
                        I’m Kamlesh Patil, a QA engineer. This is where I keep notes about my work,
                        the tools I use, problems I’ve solved, and ideas I want to remember for interviews.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/journal">Read my QA notes <span aria-hidden="true">↗</span></Link>
                        <Link className="button button-quiet" to="/about">About me <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="hero-proof">
                        <span className="hero-monogram">KP</span>
                        <p><strong>4.5+ years in software testing</strong><br />Banking · Financial services · Fleet management</p>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <div className="art-orbit orbit-one" />
                    <div className="art-orbit orbit-two" />
                    <div className="art-center">
                        <span>GOOD QA</span>
                        <strong>starts with<br /><em>understanding.</em></strong>
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
                        <p className="eyebrow">HOW I APPROACH TESTING</p>
                        <h2>Learn the product.<br /><em>Test the important parts.</em></h2>
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
                                <p className="eyebrow">A PROJECT I WORKED ON · {featured.minutes} MIN READ</p>
                                <h2>{featured.title}</h2>
                                <p>{featured.summary}</p>
                                <Link className="text-link" to={`/journal/${featured.categorySlug}/${featured.slug}`}>
                                    Read what I learned <span aria-hidden="true">↗</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                <section className="home-paths section-wrap">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">TOPICS I’M LEARNING</p>
                            <h2>Choose a topic.</h2>
                        </div>
                        <Link className="text-link" to="/journal">All my notes <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className="home-path-grid">
                        {blogData.slice(0, 4).map((category) => (
                            <Link className="home-path-card" key={category.slug} to={`/journal/${category.slug}`}>
                                <span>{category.number} / TOPIC</span>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="path-open">Read notes <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="home-quote home-peace">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <blockquote>
                        I test to find out what could go wrong and help the team fix it before it affects users.
                    </blockquote>
                    <p>KAMLESH PATIL <span>· MY QA NOTES</span></p>
                </section>

                <section className="home-quote">
                    <span className="quote-mark" aria-hidden="true">✦</span>
                    <h2>A quiet moment for myself</h2>
                    <p>My personal space for a little peace and a one-minute breathing timer.</p>
                    <Link className="button button-primary" to="/peace">Peace <span aria-hidden="true">→</span></Link>
                </section>
            </main>
        </div>
    );
};

export default Home;
