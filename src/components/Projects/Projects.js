import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projectStories } from '../Blog/data';

const Projects = () => (
    <main className="stories-page">
        <header className="stories-hero">
            <p className="eyebrow">PROJECTS</p>
            <h1>Products I’ve<br /><em>helped test.</em></h1>
            <p>
                Banking and fleet management projects, with a look at the product, the testing work,
                and the tools used.
            </p>
        </header>
        <section className="story-list" aria-label="Project experience">
            {projectStories.map((project) => (
                <article className="story-card" key={project.slug}>
                    <span className="story-number">{project.number}</span>
                    <div className="story-copy">
                        <p className="eyebrow">{project.domain}</p>
                        <h2>{project.projectName}</h2>
                        <p>{project.summary}</p>
                        {project.products?.length > 0 && (
                            <>
                                <h3 className="project-detail-heading">Products and areas</h3>
                                <ul className="project-focus-list">
                                    {project.products.map((product) => <li key={product}>{product}</li>)}
                                </ul>
                            </>
                        )}
                        <h3 className="project-detail-heading">What I worked on</h3>
                        <ul className="project-contributions">
                            {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                        </ul>
                        <p className="project-result"><strong>Result:</strong> {project.result}</p>
                        <h3 className="project-detail-heading">Testing focus</h3>
                        <ul className="project-focus-list">
                            {project.projectFocus.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        {project.tools?.length > 0 && (
                            <>
                                <h3 className="project-detail-heading">Tools</h3>
                                <ul className="skill-tags project-tool-list">
                                    {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                                </ul>
                            </>
                        )}
                        <Link className="text-link story-full-link" to={`/guides/${project.categorySlug}/${project.slug}`}>
                            Project details <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </article>
            ))}
            <aside className="domain-summary">
                <p className="eyebrow">DOMAIN EXPERIENCE</p>
                <p>Retail banking · Capital markets · Investment banking · Insurance · BFSI · Financial services · Fleet management</p>
            </aside>
        </section>
        <section className="work-principle">
            <p className="eyebrow">CONTACT</p>
            <h2>Want to talk about QA or automation?</h2>
            <a className="button button-primary" href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
        </section>
    </main>
);

export default Projects;
