import React from 'react';
import './About.css';
import { projectStories } from '../Blog/data';

const skillGroups = [
    {
        title: 'Testing',
        items: ['Manual testing', 'Functional testing', 'Test case design and execution', 'Regression testing', 'Smoke testing', 'Sanity testing', 'UAT', 'Integration testing', 'End-to-end testing', 'Exploratory testing', 'Risk-based testing', 'Mobile testing', 'Cross-browser testing', 'Mainframe integration', 'Boundary value analysis', 'Equivalence partitioning', 'Decision tables', 'Defect life cycle', 'Defect reporting/triage', 'Test case design','Requirements traceability', 'Test data', 'Boundry Value Analysis', 'Equivalence Partitioning']
    },
    {
        title: 'Automation and programming',
        items: ['Java', 'Python', 'C#', 'JavaScript', 'Selenium WebDriver', 'Playwright', 'Cypress', 'Page Object Model (POM)', 'Serenity BDD', 'Cucumber', 'Gherkin', 'TestNG', 'JUnit', 'Maven', 'YAML', 'Data-driven testing', 'Reusable test components']
    },
    {
        title: 'API and database testing',
        items: ['API testing', 'REST Assured', 'Postman', 'Swagger', 'JSON and XML validation', 'HTTP methods and status codes', 'Request and response checks', 'SQL', 'Backend data validation']
    },
    {
        title: 'Delivery and tools',
        items: ['Agile / Scrum', 'BDD', 'TDD', 'Git', 'GitHub', 'GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Jira', 'ALM', 'Xray', 'Zephyr', 'Confluence', 'IntelliJ IDEA', 'Eclipse', 'VS Code', 'BrowserStack', 'Windows', 'Linux']
    }
];

const certifications = [
    'Azure Fundamentals (AZ-900)',
    'Azure AI Fundamentals (AI-900)',
    'Azure Developer Associate (AZ-204)',
    'Salesforce Certified Agentforce Specialist',
    'Agile Software Development — Coursera',
    'Retail Banking — Capgemini University',
    'Investment Banking — Capgemini University',
    'Ocean Certified — Automation Testing, Capgemini [L1 and L2]',
    'Ocean Certified — Gen AI Tools Testing, Capgemini',
    'Retail Banking[L1 and L2]',
    'Insurance [L1 and L2]'
];

const About = () => (
    <main className="about-page">
        <header className="about-hero">
            <p className="eyebrow">ABOUT</p>
            <h1>Kamlesh Patil<br /><em>QA Engineer</em></h1>
            <p className="about-lede">
                 I’m a Senior Software Engineer, SDET (Software Development Engineer in Test),
                and Automation Test Engineer with 5 years of experience.
            </p>
        </header>

        <div className="about-content">
            <section className="about-story">
                <p className="eyebrow">PROFILE</p>
                <h2>Software quality from requirements to release.</h2>
                <p>
                    I’m a Senior Software Engineer at Capgemini with 5 years of experience delivering
                    software testing and automation across retail banking, capital markets, BFSI,
                    and fleet management. I design and maintain UI and API automation, perform
                    manual and functional testing, and help teams find and resolve defects early.
                </p>
                <p>
                    My main automation tools include Java, Selenium, Serenity BDD, Cucumber, TestNG,
                    and REST Assured. I also work with Python, C#, JavaScript, Cypress, Playwright,
                    SQL, Postman, and CI/CD tools. I work closely with developers and business
                    analysts in Agile teams, from requirement review through release checks.
                </p>
            </section>

            <section className="career-section">
                <div className="career-heading">
                    <p className="eyebrow">WORK EXPERIENCE</p>
                    <h2>Capgemini</h2>
                    <p>Senior Software Engineer · Pune, India · September 2021 – Present</p>
                </div>
                <div className="career-projects">
                    {projectStories.map((project) => (
                        <article className="career-project" key={project.slug}>
                            <div>
                                {project.period && <span className="career-period">{project.period}</span>}
                                <h3>{project.projectName}</h3>
                            </div>
                            <p>{project.domain}</p>
                            <ul>
                                {project.contributions.slice(0, 3).map((contribution) => (
                                    <li key={contribution}>{contribution}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-practice">
                <p className="eyebrow">HOW I WORK</p>
                <h2>Understand the product. Test what matters.</h2>
                <div className="practice-grid">
                    <article><span>01</span><h3>Understand the need</h3><p>Learn who uses the feature and what should happen.</p></article>
                    <article><span>02</span><h3>Check key paths</h3><p>Test normal use, edge cases, errors, and recovery.</p></article>
                    <article><span>03</span><h3>Automate repeat checks</h3><p>Use automation where it gives the team useful, reliable feedback.</p></article>
                    <article><span>04</span><h3>Share clear results</h3><p>Report what happened, how to repeat it, and why it matters.</p></article>
                </div>
            </section>

            <section className="about-capabilities">
                <div>
                    <p className="eyebrow">SKILLS AND TOOLS</p>
                    <h2>What I work with</h2>
                    <p>Testing methods, programming languages, frameworks, and tools I’ve used.</p>
                </div>
                <div className="capability-list">
                    {skillGroups.map((group, index) => (
                        <article key={group.title}>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <div>
                                <h3>{group.title}</h3>
                                <ul className="skill-tags">
                                    {group.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-learning">
                <div>
                    <p className="eyebrow">CERTIFICATIONS</p>
                    <h2>Training and learning</h2>
                    <div className="certification-list">
                        {certifications.map((certification) => <span key={certification}>{certification}</span>)}
                    </div>
                </div>
                <div>
                    <p className="eyebrow">EDUCATION</p>
                    <h2>Mechanical engineering</h2>
                    <p className="education-copy">Bachelor of Engineering, R. C. Patel Institute of Technology, 2019</p>
                    <p className="education-copy">Diploma, Smt. S. Patil Institute of Technology, 2016</p>
                </div>
            </section>

            <section className="about-extras">
                <div>
                    <p className="eyebrow">HOW I WORK</p>
                    <h2>Problem solving, analysis, teamwork, and clear communication.</h2>
                </div>
                <div>
                    <p className="eyebrow">LANGUAGES</p>
                    <p>English · Hindi · Marathi</p>
                    <p className="eyebrow extras-subhead">INTERESTS</p>
                    <p>Exploring automation frameworks · Teaching QA concepts · Continuous learning · Open-source contributions · Reading about psychology and human resources (HR)</p>
                </div>
            </section>

            <section className="about-book">
                <div>
                    <p className="eyebrow">CONTACT</p>
                    <h2>Let’s talk about testing.</h2>
                    <p>Pune, India · Open to remote, hybrid, or on-site roles and relocation across India.</p>
                    <p>Availability: 90 days’ notice</p>
                </div>
                <div className="contact-links">
                    <a href="tel:+917770000347">+91 77700 00347</a>
                    <a href="mailto:patilkamlesh1811@gmail.com">patilkamlesh1811@gmail.com</a>
                    <a href="https://www.linkedin.com/in/iamkamlesh18" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <a href="https://github.com/iamkamlesh18" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    <a href="https://iamkamlesh18.github.io/iamkamlesh18/" target="_blank" rel="noopener noreferrer">Developer profile ↗</a>
                </div>
            </section>
        </div>
    </main>
);

export default About;
