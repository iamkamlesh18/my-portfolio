import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const capabilities = [
    ['Software testing', 'Manual, functional, exploratory, regression, and risk-based testing'],
    ['Test automation', 'Java, Selenium, Serenity BDD, Cucumber, TestNG, and reusable test frameworks'],
    ['API and mobile testing', 'REST Assured, Postman, mobile apps, and cross-browser testing'],
    ['Team delivery', 'Agile Scrum, bug tracking, Git, CI/CD, and mainframe integration']
];

const certifications = ['AZ-900', 'AI-900', 'AZ-204', 'Agentforce QA'];

const About = () => (
    <main className="about-page">
        <header className="about-hero">
            <p className="eyebrow">ABOUT ME</p>
            <h1>My work<br /><em>in software testing.</em></h1>
            <p className="about-lede">
                I’m Kamlesh Patil. I have 5 years of experience testing software.
                This page helps me remember what I have worked on, what I have learned, and what
                I can talk about in an interview.
            </p>
        </header>

        <div className="about-content">
            <section className="about-story">
                <p className="eyebrow">MY PROJECT EXPERIENCE</p>
                <h2>What I have worked on</h2>
                <p>
                    I have tested banking and financial services, fleet management, web and mobile
                    apps, and automated tests. In banking, I learned that a bug can affect a
                    customer’s money, transactions, and trust.
                </p>
                <p>
                    Fleet management was a new area for me. I learned how vehicles, drivers,
                    tracking, and reports fit together. Before testing a product, I first learn
                    who uses it and how their work gets done.
                </p>
                <p>
                    On a cooperative banking project, I worked with shared Gherkin scenarios and
                    reusable test steps. Fixing unreliable tests taught me that automation needs
                    careful design and regular maintenance.
                </p>
                <Link className="text-link" to="/projects">See my project notes <span aria-hidden="true">↗</span></Link>
            </section>

            <aside className="about-manifesto">
                <span className="manifesto-mark" aria-hidden="true">“</span>
                <p>I test software to find problems early and help protect the people who use it.</p>
                <span className="eyebrow">WHY I TEST</span>
            </aside>

            <section className="about-practice">
                <p className="eyebrow">HOW I WORK</p>
                <h2>Ask questions, check the details, and work as a team.</h2>
                <div className="practice-grid">
                    <article><span>01</span><h3>Learn the feature</h3><p>Find out who uses it, what they need, and what could go wrong.</p></article>
                    <article><span>02</span><h3>Check more than the usual case</h3><p>Test limits, errors, changes, connections, and recovery.</p></article>
                    <article><span>03</span><h3>Work with the team</h3><p>Share questions and test results early so problems are easier to fix.</p></article>
                    <article><span>04</span><h3>Keep learning</h3><p>Try things, learn from mistakes, and share what helped.</p></article>
                </div>
            </section>

            <section className="about-capabilities">
                <div>
                    <p className="eyebrow">SKILLS AND TOOLS</p>
                    <h2>What I have used</h2>
                    <p>These are the main types of testing and tools I have used in my work.</p>
                </div>
                <div className="capability-list">
                    {capabilities.map(([title, description], index) => (
                        <article key={title}>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <div><h3>{title}</h3><p>{description}</p></div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-learning">
                <div>
                    <p className="eyebrow">WHAT I AM LEARNING</p>
                    <h2>I keep building my skills.</h2>
                    <p>
                        I have studied Azure, AI, Azure development, and Agentforce QA. These
                        certifications show what I have learned, alongside the experience I have
                        gained from real projects.
                    </p>
                    <div className="certification-list">
                        {certifications.map((certification) => <span key={certification}>{certification}</span>)}
                    </div>
                </div>
                <p className="learning-note">
                    I am also learning about cloud tools, AI for QA, mobile automation, and
                    current testing practices. I want to understand how they help in real work.
                </p>
            </section>

            <section className="about-book">
                <p className="eyebrow">WHY I MADE THIS SITE</p>
                <h2>                A place to tell my story and practise explaining my work.</h2>
                <p>
                    I built this site to introduce myself, explain my projects in simple language,
                    and practise talking about what I learned. My project stories come first; the
                    testing notes give more detail when I want to explore a topic.
                </p>
                <Link className="button button-primary" to="/journal">Read my notes <span aria-hidden="true">↗</span></Link>
            </section>
        </div>
    </main>
);

export default About;
