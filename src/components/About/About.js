import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const capabilities = [
    ['Testing craft', 'Manual, functional, exploratory, regression, and risk-based testing'],
    ['Automation', 'Java, Selenium WebDriver, Serenity BDD, Cucumber, TestNG, and reusable frameworks'],
    ['API and mobile', 'REST Assured, Postman, mobile testing, and cross-browser validation'],
    ['Delivery', 'Agile Scrum, defect management, Git, CI/CD, and mainframe integration']
];

const certifications = ['AZ-900', 'AI-900', 'AZ-204', 'Agentforce QA'];

const About = () => (
    <main className="about-page">
        <header className="about-hero">
            <p className="eyebrow">THE ENGINEER BEHIND THIS FIELD GUIDE</p>
            <h1>Who I am,<br /><em>and how I learned to test.</em></h1>
            <p className="about-lede">
                I’m Kamlesh Patil, a software engineer with more than 4.5 years in software
                testing and quality engineering. This is not a catalogue of tools. It is a
                record of the questions, mistakes, and practical lessons that changed how I work.
            </p>
        </header>

        <div className="about-content">
            <section className="about-story">
                <p className="eyebrow">A JOURNEY THROUGH DIFFERENT SYSTEMS</p>
                <h2>Every product has a business behind it.</h2>
                <p>
                    My work has taken me through banking and financial services, fleet management,
                    web and mobile applications, and automation frameworks. My first major banking
                    project made the stakes of software quality real: a defect can affect customer
                    money, transactions, trust, and the people who support the system.
                </p>
                <p>
                    Later, working with a fleet management platform taught me not to mistake an
                    unfamiliar domain for a simple one. Vehicles, drivers, tracking, reports, and
                    operational decisions create their own connected risks. Before testing a
                    product, I need to learn the people, workflow, and business rules behind it.
                </p>
                <p>
                    A cooperative banking project changed how I thought about automation. Shared
                    Gherkin requirements, reusable behavior, and a couple of stubborn reliability
                    problems showed me that automation is software engineering: design a useful
                    feedback system, make it maintainable, and help the whole team trust its results.
                </p>
                <Link className="text-link" to="/projects">Read the project stories <span aria-hidden="true">↗</span></Link>
            </section>

            <aside className="about-manifesto">
                <span className="manifesto-mark" aria-hidden="true">“</span>
                <p>Testing is not about proving software works. It is about understanding where it can fail before customers suffer.</p>
                <span className="eyebrow">MY TESTING PHILOSOPHY</span>
            </aside>

            <section className="about-practice">
                <p className="eyebrow">HOW I TRY TO WORK</p>
                <h2>Think critically. Stay curious. Share the risk.</h2>
                <div className="practice-grid">
                    <article><span>01</span><h3>Understand first</h3><p>Ask what problem the feature solves, who depends on it, and what a failure would mean.</p></article>
                    <article><span>02</span><h3>Question assumptions</h3><p>Look beyond the happy path. Explore boundaries, state changes, integrations, and recovery.</p></article>
                    <article><span>03</span><h3>Collaborate early</h3><p>Quality belongs to the whole team. Make requirements, evidence, and known risks discussable.</p></article>
                    <article><span>04</span><h3>Learn in the open</h3><p>Experiment, observe failures, share what changed, and give credit to the people involved.</p></article>
                </div>
            </section>

            <section className="about-capabilities">
                <div>
                    <p className="eyebrow">PRACTICE, NOT A TOOL CHECKLIST</p>
                    <h2>Where I’ve built experience</h2>
                    <p>Tools are useful when they help answer a real engineering question. These are the areas that have shaped my day-to-day work.</p>
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
                    <p className="eyebrow">ALWAYS A STUDENT</p>
                    <h2>Learning is part of the job.</h2>
                    <p>
                        Certifications have helped me structure some of that learning, including
                        Azure fundamentals, AI fundamentals, Azure development, and Agentforce QA.
                        They are one part of the journey—not a substitute for project experience,
                        thoughtful questions, or collaboration.
                    </p>
                    <div className="certification-list">
                        {certifications.map((certification) => <span key={certification}>{certification}</span>)}
                    </div>
                </div>
                <p className="learning-note">
                    I keep exploring cloud technologies, AI-assisted quality work, mobile
                    automation, and modern QA practices. My goal is to understand where they
                    genuinely help—not to chase every new tool.
                </p>
            </section>

            <section className="about-book">
                <p className="eyebrow">WHAT THIS BOOK IS FOR</p>
                <h2>Become the engineer people trust with the hard questions.</h2>
                <p>
                    I hope these notes help you understand requirements, find consequential
                    issues, build maintainable automation, communicate clearly, solve real
                    business problems, and keep learning. Tools will change. Critical thinking,
                    curiosity, and the ability to create value will keep mattering.
                </p>
                <Link className="button button-primary" to="/journal">Start reading <span aria-hidden="true">↗</span></Link>
            </section>
        </div>
    </main>
);

export default About;
