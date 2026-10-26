import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const interviewAnswers = [
    {
        question: 'Tell me about yourself.',
        answer: 'I’m Kamlesh Patil, and I have 5 years of experience in software testing. My work has grown from understanding requirements and testing features to automation. I use this book to prepare clear answers about testing concepts, tools, and the work I have done.'
    },
    {
        question: 'Tell me about your Rainbow project.',
        answer: 'Rainbow was a custom automation framework used by my project team. We ran its scripts locally and through Jenkins. I explain how I used it, what I personally contributed, and how the execution results supported the team.'
    },
    {
        question: 'How do you explain a test automation framework at an architectural level?',
        answer: 'I describe the responsibilities and how they connect: readable test scenarios, reusable test code, application-facing helpers, configuration and test data, execution, and reporting. I explain the reason for each boundary, how changes are kept maintainable, and which parts I personally designed or improved. I distinguish general framework principles from the exact components in Rainbow.'
    },
    {
        question: 'How did local execution differ from Jenkins execution?',
        answer: 'Local runs helped me develop, debug, and reproduce automation quickly. Jenkins gave the team a shared place to run scripts and review results. I explain the actual run configuration and pipeline behavior from my project rather than assuming every Jenkins setup works the same way.'
    },
    {
        question: 'What topics does this interview book cover?',
        answer: 'It moves from testing foundations and the testing lifecycle to manual test design, Agile and BDD, Java, Selenium, Serenity, automation frameworks, APIs, CI, and project interview answers.'
    }
];

const About = () => (
    <main className="about-page">
        <header className="about-hero">
            <p className="eyebrow">MY INTERVIEW PREPARATION</p>
            <h1>My testing journey,<br /><em>in question and answer.</em></h1>
            <p className="about-lede">
                A personal preparation book for my 5 years in software testing. I keep each answer
                direct, simple, and grounded in what I know and have done.
            </p>
        </header>

        <div className="about-content">
            <section className="about-story" aria-label="Interview questions and answers">
                {interviewAnswers.map(({ question, answer }, index) => (
                    <article className="reader-section" key={question}>
                        <span className="reader-section-number">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                            <p className="eyebrow">QUESTION {String(index + 1).padStart(2, '0')}</p>
                            <h2>{question}</h2>
                            <p className="answer-label">SIMPLE ANSWER</p>
                            <p>{answer}</p>
                        </div>
                    </article>
                ))}
                <Link className="button button-primary" to="/journal">Open my interview book <span aria-hidden="true">↗</span></Link>
            </section>
        </div>
    </main>
);

export default About;
