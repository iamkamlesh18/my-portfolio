import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { projectStories } from '../Blog/data';

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-content">
                    <p className="eyebrow"><span className="status-dot" /> AUTOMATION TEST ENGINEER · SDET · QA ANALYST</p>
                    <h1>Kamlesh Patil<br /><em>QA Engineer</em></h1>
                    <p className="hero-description">
                         I have 5 years of experience in testing across banking, insurance, financial services,
                        and fleet management products. I work across functional, API, and regression
                        testing, and build automation with Java, Python, and JavaScript.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/projects">View projects <span aria-hidden="true">↗</span></Link>
                        <Link className="button button-quiet" to="/about">View skills <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="hero-proof">
                        <span className="hero-monogram">KP</span>
                        <p><strong>5 years in software quality</strong><br />Banking · Capital markets · Fleet management</p>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <div className="art-orbit orbit-one" />
                    <div className="art-orbit orbit-two" />
                    <div className="art-center">
                        <span>SOFTWARE QUALITY</span>
                        <strong>test it.<br /><em>improve it.</em></strong>
                    </div>
                    <span className="art-note note-one">Banking</span>
                    <span className="art-note note-two">Fleet</span>
                    <span className="art-note note-three">Automation</span>
                </div>
                <span className="hero-index" aria-hidden="true">KAMLESH PATIL / QA ENGINEER</span>
            </section>

            <main>
                <section className="introduction-section section-wrap">
                    <div className="introduction-heading">
                        <p className="eyebrow">WHAT I DO</p>
                        <h2>Testing products from screen to service.</h2>
                    </div>
                    <div className="introduction-answer">
                        <p>
                            I test features, APIs, and complete user workflows. My work includes
                            functional, regression, smoke, and UI testing, plus test automation.
                            I work with product and development teams in Agile/Scrum and use CI tools
                            to give the team clear feedback.
                        </p>
                        <span>Clear checks. Useful feedback. Reliable releases.</span>
                    </div>
                </section>

                <section className="journey-section section-wrap">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">PROJECT EXPERIENCE · CAPGEMINI</p>
                            <h2>Products I’ve worked on.</h2>
                        </div>
                        <Link className="text-link" to="/projects">All projects <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className="journey-list">
                        {projectStories.map((story) => (
                            <article className="journey-card" key={story.slug}>
                                <span className="journey-number">{story.number}</span>
                                <div>
                                    <p className="eyebrow">{story.domain}</p>
                                    <h3>{story.projectName}</h3>
                                    <p>{story.summary}</p>
                                    <Link className="text-link" to={`/guides/${story.categorySlug}/${story.slug}`}>
                                        Project details <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                        </article>
                        ))}
                    </div>
                </section>

                <section className="home-quote">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <blockquote>
                        I test to find out what could go wrong and help the team fix it before it affects users.
                    </blockquote>
                    <p>KAMLESH PATIL <span>· QA ENGINEER</span></p>
                </section>

                <section className="home-more-reading">
                    <p className="eyebrow">PRACTICAL GUIDES</p>
                    <h2>Clear guides to testing and automation.</h2>
                    <p>Start with the basics, learn about testing tools, or see how I applied these ideas on projects.</p>
                    <Link className="text-link" to="/guides">Browse testing guides <span aria-hidden="true">↗</span></Link>
                </section>
            </main>
        </div>
    );
};

export default Home;
