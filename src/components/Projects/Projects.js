import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const stories = [
    {
        number: '01',
        title: 'Union Bank',
        subtitle: 'Banking · Domain understanding · Risk-based testing',
        summary: 'My first major banking project made customer impact tangible. A defect can reach beyond a screen to money, transactions, trust, and operational confidence.',
        slug: 'union-bank-risk-and-trust'
    },
    {
        number: '02',
        title: 'Elements Fleet Management',
        subtitle: 'Fleet operations · Functional and regression testing',
        summary: 'A new domain taught me that every product has its own complexity. Learning vehicles, drivers, tracking, reporting, and operational workflows changed what I looked for.',
        slug: 'elements-fleet-management'
    },
    {
        number: '03',
        title: 'Cooperative Banking',
        subtitle: 'Agile · Gherkin · Serenity BDD · Java · Selenium',
        summary: 'Shared executable requirements, reusable automation, safer credential handling, and application-state waits improved regression confidence and reduced manual intervention.',
        slug: 'cooperative-bank-automation'
    }
];

const Projects = () => (
    <main className="stories-page">
        <header className="stories-hero">
            <p className="eyebrow">THE PROJECT NOTEBOOK</p>
            <h1>Lessons from<br /><em>the real work.</em></h1>
            <p>
                These are not victory laps. They are honest notes on what each project taught me
                about business risk, collaboration, and the practical work of building quality.
            </p>
        </header>
        <section className="story-list" aria-label="Project case studies">
            {stories.map((story) => (
                <article className="story-card" key={story.slug}>
                    <span className="story-number">{story.number}</span>
                    <div className="story-copy">
                        <p className="eyebrow">{story.subtitle}</p>
                        <h2>{story.title}</h2>
                        <p>{story.summary}</p>
                        <Link className="text-link" to={`/journal/project-stories/${story.slug}`}>
                            Read the field note <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                    <span className="story-arrow" aria-hidden="true">↗</span>
                </article>
            ))}
        </section>
        <section className="work-principle">
            <p className="eyebrow">THE THREAD THROUGH EVERY PROJECT</p>
            <h2>Understand the business.<br /><em>Then test what matters.</em></h2>
            <Link className="button button-primary" to="/journal/project-stories">Explore all project lessons <span aria-hidden="true">↗</span></Link>
        </section>
        <section className="side-projects">
            <p className="eyebrow">SMALL BUILDS, DIFFERENT KINDS OF PRACTICE</p>
            <h2>Things I’ve made along the way</h2>
            <div className="side-project-grid">
                <Link to="/projects/currencyconverter"><span>UTILITY / 01</span><strong>Currency Converter</strong><span>Explore the build ↗</span></Link>
                <Link to="/projects/BreathSync"><span>WELLBEING / 02</span><strong>BreathSync</strong><span>Explore the build ↗</span></Link>
            </div>
        </section>
    </main>
);

export default Projects;
