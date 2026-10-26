import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projectStories } from '../Blog/data';

const Projects = () => (
    <main className="stories-page">
        <header className="stories-hero">
            <p className="eyebrow">PROJECT INTERVIEW Q&amp;A</p>
            <h1>Rainbow framework,<br /><em>in my own words.</em></h1>
            <p>
                A simple, accurate answer about my team’s custom automation framework, how we ran
                scripts locally and through Jenkins, and how I explain framework design.
            </p>
        </header>
        <section className="story-list" aria-label="Project stories">
            {projectStories.map((story) => (
                <article className="story-card" key={story.slug}>
                    <span className="story-number">{story.number}</span>
                    <div className="story-copy">
                        <p className="eyebrow">INTERVIEW QUESTION</p>
                        <h2>{story.projectName}</h2>
                        <h3>How do I describe my work on this project?</h3>
                        <p>{story.interviewAnswer}</p>
                        <Link className="text-link story-full-link" to={`/journal/${story.categorySlug}/${story.slug}`}>
                            Open the chapter Q&amp;A <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                    <span className="story-arrow" aria-hidden="true">{story.number}</span>
                </article>
            ))}
        </section>
        <section className="work-principle">
            <p className="eyebrow">MY INTERVIEW PREP</p>
            <h2>Question first.<br /><em>Simple answer next.</em></h2>
            <Link className="button button-primary" to="/journal">Back to the interview book <span aria-hidden="true">↗</span></Link>
        </section>
    </main>
);

export default Projects;
