import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { blogData, projectStories } from '../Blog/data';

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-content">
                    <p className="eyebrow"><span className="status-dot" /> MY PERSONAL QA INTERVIEW BOOK</p>
                    <h1>I’m Kamlesh Patil.<br /><em>This is my prep book.</em></h1>
                    <p className="hero-description">
                        I have 5 years of testing experience. I use this chapter-wise book to prepare
                        for interviews, from testing foundations to Java, Selenium, Serenity, and my
                        Rainbow custom automation framework.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/journal">Open my interview book <span aria-hidden="true">↗</span></Link>
                        <Link className="button button-quiet" to="/journal/project-stories/rainbow-framework">Rainbow framework Q&amp;A <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="hero-proof">
                        <span className="hero-monogram">KP</span>
                        <p><strong>5 years in software testing</strong><br />Interview questions · Simple answers · My project</p>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <div className="art-orbit orbit-one" />
                    <div className="art-orbit orbit-two" />
                    <div className="art-center">
                        <span>MY STUDY PATH</span>
                        <strong>learn it.<br /><em>explain it.</em></strong>
                    </div>
                    <span className="art-note note-one">Testing</span>
                    <span className="art-note note-two">Java</span>
                    <span className="art-note note-three">Rainbow</span>
                </div>
                <span className="hero-index" aria-hidden="true">KAMLESH PATIL / QA ENGINEER</span>
            </section>

            <main>
                <section className="introduction-section section-wrap">
                    <div className="introduction-heading">
                        <p className="eyebrow">INTERVIEW QUESTION 01</p>
                        <h2>“Tell me about yourself.”</h2>
                    </div>
                    <div className="introduction-answer">
                        <p>
                            My name is Kamlesh Patil, and I have 5 years of experience in software
                            testing. My work has grown from understanding requirements and testing
                            features to using automation. In one project, I worked with Rainbow, a
                            custom automation framework, running scripts locally and through Jenkins.
                            I use this book to prepare clear answers about testing, Java, Selenium,
                            Serenity, automation design, and the work I have done.
                        </p>
                        <span>A short answer to practise in my own words.</span>
                    </div>
                </section>

                <section className="journey-section section-wrap">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">MY STUDY PATH</p>
                            <h2>From testing basics to advanced topics.</h2>
                        </div>
                        <Link className="text-link" to="/journal">Browse every chapter <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className="journey-list">
                        {blogData.map((chapter, index) => (
                            <article className="journey-card" key={chapter.slug}>
                                <span className="journey-number">{chapter.number}</span>
                                <div>
                                    <p className="eyebrow">{index < 2 ? 'FOUNDATIONS' : index < 5 ? 'BUILDING SKILLS' : 'PROJECT Q&A'}</p>
                                    <h3>{chapter.title}</h3>
                                    <p>{chapter.description}</p>
                                    <Link className="text-link" to={`/journal/${chapter.slug}`}>
                                        Open {chapter.posts.length} interview chapters <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="home-quote home-framework">
                    <span className="quote-mark" aria-hidden="true">Q&amp;A</span>
                    <h2>{projectStories[0].projectName}</h2>
                    <blockquote>{projectStories[0].interviewAnswer}</blockquote>
                    <Link className="text-link" to={`/journal/${projectStories[0].categorySlug}/${projectStories[0].slug}`}>
                        Read the framework interview answers <span aria-hidden="true">↗</span>
                    </Link>
                </section>

                <section className="home-more-reading">
                    <p className="eyebrow">MY PERSONAL STUDY RESOURCE</p>
                    <h2>One interview question at a time.</h2>
                    <p>This book is for my own preparation. Each chapter pairs an interview question with a straightforward answer.</p>
                    <Link className="text-link" to="/journal">Continue to the interview book <span aria-hidden="true">↗</span></Link>
                </section>
            </main>
        </div>
    );
};

export default Home;
