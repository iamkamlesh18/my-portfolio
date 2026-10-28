import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { certifications, skillGroups } from '../About/About';
import { blogData, projectStories } from '../Blog/data';
import { getExperienceYearsMonths } from '../../utils/experience';
import './SiteReference.css';

const SiteReference = () => {
    const { state } = useLocation();
    const experience = getExperienceYearsMonths();

    if (!state?.siteReferenceUnlocked) {
        return <Navigate to="/about" replace />;
    }

    return (
      <main className="site-reference-page">
        <header className="site-reference-hero">
            <p className="eyebrow">PERSONAL SITE REFERENCE</p>
            <h1>Kamlesh Patil<br /><em>QA Engineer</em></h1>
            <p>
                A single place for the professional details, project highlights, and page structure
                I use to keep my portfolio and future sites consistent.
            </p>
        </header>

        <div className="site-reference-content">
            <section className="reference-section">
                <p className="eyebrow">PROFILE</p>
                <h2>Professional snapshot</h2>
                <p className="reference-lede">
                    Senior Software Engineer, SDET, and Automation Test Engineer at Capgemini,
                    with {experience} years of experience in software testing and automation.
                </p>
                <dl className="reference-facts">
                    <div><dt>Based in</dt><dd>Pune, India</dd></div>
                    <div><dt>Experience</dt><dd>September 2021 – Present · Capgemini</dd></div>
                    <div><dt>Domains</dt><dd>Retail banking, capital markets, investment banking, insurance, BFSI, and fleet management</dd></div>
                    <div><dt>Education</dt><dd>B.E. in Mechanical Engineering, R. C. Patel Institute of Technology (2019); Diploma, Smt. S. Patil Institute of Technology (2016)</dd></div>
                    <div><dt>Languages</dt><dd>English, Hindi, and Marathi</dd></div>
                    <div><dt>Ways of working</dt><dd>Problem solving, analysis, teamwork, and clear communication in Agile teams</dd></div>
                    <div><dt>Interests</dt><dd>Automation frameworks, teaching QA concepts, continuous learning, open-source contributions, psychology, and human resources</dd></div>
                </dl>
            </section>

            <section className="reference-section">
                <p className="eyebrow">WORK EXPERIENCE</p>
                <h2>Project highlights</h2>
                <div className="reference-projects">
                    {projectStories.map((project) => (
                        <article key={project.slug}>
                            <p className="eyebrow">{project.domain}</p>
                            <h3>{project.projectName}</h3>
                            <p>{project.summary}</p>
                            {project.products?.length > 0 && (
                                <p><strong>Products:</strong> {project.products.join(' · ')}</p>
                            )}
                            <h4>Contributions</h4>
                            <ul>
                                {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                            </ul>
                            <h4>Testing focus</h4>
                            <ul>
                                {project.projectFocus.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                            {project.tools?.length > 0 && (
                                <p><strong>Tools:</strong> {project.tools.join(' · ')}</p>
                            )}
                            <p><strong>Result:</strong> {project.result}</p>
                            <Link className="text-link" to={`/guides/${project.categorySlug}/${project.slug}`}>
                                View project details <span aria-hidden="true">→</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="reference-section reference-skills">
                <div>
                    <p className="eyebrow">SKILLS AND TOOLS</p>
                    <h2>What I work with</h2>
                </div>
                <div className="reference-skill-groups">
                    {skillGroups.map((group) => (
                        <article key={group.title}>
                            <h3>{group.title}</h3>
                            <ul className="skill-tags">
                                {group.items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="reference-section">
                <p className="eyebrow">CERTIFICATIONS AND LEARNING</p>
                <h2>Training and education</h2>
                <ul className="reference-certifications">
                    {certifications.map((certification) => <li key={certification}>{certification}</li>)}
                </ul>
            </section>

            <section className="reference-section reference-contact">
                <p className="eyebrow">CONTACT AND PROFILES</p>
                <h2>Find me online</h2>
                <div className="reference-contact-links">
                    <a href="mailto:patilkamlesh1811@gmail.com">patilkamlesh1811@gmail.com</a>
                    <a href="tel:+917770000347">+91 77700 00347</a>
                    <a href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    <a href="https://iamkamlesh18.github.io/iamkamlesh18/" target="_blank" rel="noopener noreferrer">Developer profile ↗</a>
                </div>
                <p className="reference-availability">
                    Open to remote, hybrid, or on-site roles and relocation across India · 90 days’ notice
                </p>
            </section>

            <section className="reference-section reference-tree">
                <p className="eyebrow">SITE MAP</p>
                <h2>Page and content tree</h2>
                <p className="reference-lede">
                    The public pages and their paths, kept alongside the profile details for easy reference.
                </p>
                <ul className="site-tree">
                    <li>
                        <Link to="/">Home <code>/</code></Link>
                        <ul>
                            <li>Introduction and links to projects and skills</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/projects">Projects <code>/projects</code></Link>
                        <ul>
                            {projectStories.map((project) => (
                                <li key={project.slug}>
                                    <Link to={`/guides/${project.categorySlug}/${project.slug}`}>
                                        {project.projectName} <code>/guides/{project.categorySlug}/{project.slug}</code>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <Link to="/about">Skills and experience <code>/about</code></Link>
                    </li>
                    <li>
                        <Link to="/guides">Testing guides <code>/guides</code></Link>
                        <ul>
                            {blogData.map((category) => (
                                <li key={category.slug}>
                                    <Link to={`/guides/${category.slug}`}>
                                        {category.title} <code>/guides/{category.slug}</code>
                                    </Link>
                                    <ul>
                                        {category.posts.map((post) => (
                                            <li key={post.slug}>
                                                <Link to={`/guides/${category.slug}/${post.slug}`}>
                                                    {post.title} <code>/guides/{category.slug}/{post.slug}</code>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <Link to="/peace">Peace <code>/peace</code></Link>
                    </li>
                    <li>
                        <span>Contact and external profiles</span>
                        <ul>
                            <li><a href="mailto:patilkamlesh1811@gmail.com">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/iamkamlesh18/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://iamkamlesh18.github.io/rhythm-of-life/" target="_blank" rel="noopener noreferrer">Rhythm of Life (coming soon)</a></li>
                            <li><a href="https://iamkamlesh18.github.io/qa-sdet-interview-guide/" target="_blank" rel="noopener noreferrer">QA &amp; SDET Interview Guide (coming soon)</a></li>
                        </ul>
                    </li>
                    <li>
                        <span>Legacy guide aliases</span>
                        <ul>
                            <li><Link to="/journal">Journal <code>/journal</code></Link></li>
                            <li><Link to="/blog">Blog <code>/blog</code></Link></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
      </main>
    );
};

export default SiteReference;
