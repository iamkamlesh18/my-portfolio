import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { projectStories } from '../Blog/data';

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-content">
                    <p className="eyebrow"><span className="status-dot" /> MY STORY · MY WORK · WHAT I’VE LEARNED</p>
                    <h1>I’m Kamlesh Patil.<br /><em>I make software better.</em></h1>
                    <p className="hero-description">
                        I’m a QA engineer with 5 years of experience. I started in banking, moved into
                        fleet management, and grew into test automation. This is my story, explained
                        simply and one project at a time.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/projects">Follow my project journey <span aria-hidden="true">↗</span></Link>
                        <Link className="button button-quiet" to="/about">More about me <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="hero-proof">
                        <span className="hero-monogram">KP</span>
                        <p><strong>5 years in quality assurance</strong><br />Banking · Financial services · Fleet management</p>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <div className="art-orbit orbit-one" />
                    <div className="art-orbit orbit-two" />
                    <div className="art-center">
                        <span>MY JOURNEY</span>
                        <strong>learn it.<br /><em>test it.</em></strong>
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
                        <p className="eyebrow">A SIMPLE INTRODUCTION</p>
                        <h2>“Tell me about yourself.”</h2>
                    </div>
                    <div className="introduction-answer">
                        <p>
                            My name is Kamlesh Patil, and I’m a QA engineer with 5 years of experience.
                            I’ve worked on banking, financial services, and fleet management projects.
                            I began by learning how products work and testing their important features.
                            Later, I worked with my team on test automation and making checks more reliable.
                            I enjoy finding clear ways to help teams deliver software people can trust.
                        </p>
                        <span>Read it once. Then try saying it in your own words.</span>
                    </div>
                </section>

                <section className="journey-section section-wrap">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">MY EXPERIENCE, IN ORDER</p>
                            <h2>Three projects. Three steps forward.</h2>
                        </div>
                        <Link className="text-link" to="/projects">Explore my projects <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className="journey-list">
                        {projectStories.map((story) => (
                            <article className="journey-card" key={story.slug}>
                                <span className="journey-number">{story.number}</span>
                                <div>
                                    <p className="eyebrow">{story.number === '01' ? 'WHERE I STARTED' : story.number === '02' ? 'A NEW INDUSTRY' : 'GROWING INTO AUTOMATION'}</p>
                                    <h3>{story.projectName}</h3>
                                    <p>{story.summary}</p>
                                    <Link className="text-link" to={`/journal/${story.categorySlug}/${story.slug}`}>
                                        Read the story and practise my answer <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                        </article>
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

                <section className="home-more-reading">
                    <p className="eyebrow">WANT TO LEARN MORE?</p>
                    <h2>Simple notes on the tools and ideas behind my work.</h2>
                    <p>My projects come first. Explore the learning notes when you want to understand a testing idea in more detail.</p>
                    <Link className="text-link" to="/journal">Explore my learning notes <span aria-hidden="true">↗</span></Link>
                </section>
            </main>
        </div>
    );
};

export default Home;
