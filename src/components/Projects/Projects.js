import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projectStories } from '../Blog/data';

const Projects = () => (
    <main className="stories-page">
        <header className="stories-hero">
            <p className="eyebrow">MY PROJECT NOTES</p>
            <h1>My project journey,<br /><em>one story at a time.</em></h1>
            <p>
                Start with my first banking project, follow me into fleet management, and see how I
                grew into automation. Each story has a simple interview answer and a question to practise.
            </p>
        </header>
        <section className="story-list" aria-label="Project stories">
            {projectStories.map((story) => (
                <article className="story-card" key={story.slug}>
                    <span className="story-number">{story.number}</span>
                    <div className="story-copy">
                        <p className="eyebrow">{story.category.title} · {story.minutes} MIN READ</p>
                        <h2>{story.projectName}</h2>
                        <p>{story.summary}</p>
                        <details className="story-answer">
                            <summary>Read a simple interview answer</summary>
                            <p>{story.interviewAnswer}</p>
                        </details>
                        <details className="story-practice">
                            <summary>Now try this question yourself</summary>
                            <p>{story.practiceQuestion}</p>
                        </details>
                        <Link className="text-link story-full-link" to={`/journal/${story.categorySlug}/${story.slug}`}>
                            Read the full project story <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                    <span className="story-arrow" aria-hidden="true">{story.number}</span>
                </article>
            ))}
        </section>
        <section className="work-principle">
            <p className="eyebrow">KEEP LEARNING</p>
            <h2>Know the story.<br /><em>Say it in your own words.</em></h2>
            <Link className="button button-primary" to="/about">Get to know me <span aria-hidden="true">↗</span></Link>
        </section>
    </main>
);

export default Projects;
