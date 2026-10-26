import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const stories = [
    {
        number: '01',
        title: 'Union Bank',
        subtitle: 'Banking · Testing money transfers · Customer impact',
        summary: 'I learned how testing can help protect customer accounts, payments, and trust.',
        slug: 'union-bank-risk-and-trust'
    },
    {
        number: '02',
        title: 'Elements Fleet Management',
        subtitle: 'Fleet management · Feature and regression testing',
        summary: 'I learned how vehicles, drivers, tracking, and reports work together in a fleet system.',
        slug: 'elements-fleet-management'
    },
    {
        number: '03',
        title: 'Cooperative Banking',
        subtitle: 'Agile · Gherkin · Serenity BDD · Java · Selenium',
        summary: 'I used shared scenarios and reusable tests, and learned how to make automated checks more reliable.',
        slug: 'cooperative-bank-automation'
    }
];

const Projects = () => (
    <main className="stories-page">
        <header className="stories-hero">
            <p className="eyebrow">MY PROJECT NOTES</p>
            <h1>Projects I’ve worked on<br /><em>and what I learned.</em></h1>
            <p>
                Short notes about my projects, the testing I did, and what I learned along the way.
            </p>
        </header>
        <section className="story-list" aria-label="Project notes">
            {stories.map((story) => (
                <article className="story-card" key={story.slug}>
                    <span className="story-number">{story.number}</span>
                    <div className="story-copy">
                        <p className="eyebrow">{story.subtitle}</p>
                        <h2>{story.title}</h2>
                        <p>{story.summary}</p>
                        <Link className="text-link" to={`/journal/project-stories/${story.slug}`}>
                            Read my project note <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                    <span className="story-arrow" aria-hidden="true">↗</span>
                </article>
            ))}
        </section>
        <section className="work-principle">
            <p className="eyebrow">MY APPROACH</p>
            <h2>Learn how it works.<br /><em>Then test the risks.</em></h2>
            <Link className="button button-primary" to="/journal/project-stories">Read all project notes <span aria-hidden="true">↗</span></Link>
        </section>
    </main>
);

export default Projects;
