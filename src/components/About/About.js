import React from 'react';
import './About.css';

const skillGroups = [
    {
        title: 'Testing',
        items: ['Functional testing', 'Regression testing', 'Smoke testing', 'Sanity testing', 'Integration testing', 'End-to-end testing', 'Exploratory testing', 'Risk-based testing', 'Mobile testing', 'Cross-browser testing', 'Mainframe integration', 'Boundary value analysis', 'Equivalence partitioning', 'Decision tables', 'Defect life cycle', 'Defect reporting', 'Test case design', 'Test data']
    },
    {
        title: 'Automation',
        items: ['Java', 'Python', 'JavaScript', 'Selenium WebDriver', 'Playwright', 'Cypress', 'Page Object Model (POM)', 'XPath', 'CSS selectors', 'Explicit and fluent waits', 'Serenity BDD', 'Cucumber', 'Gherkin', 'TestNG', 'JUnit', 'Data-driven testing', 'Reusable test steps']
    },
    {
        title: 'API and data',
        items: ['API testing', 'REST Assured', 'Postman', 'JSON', 'HTTP methods and status codes', 'Request and response checks', 'SQL', 'SQL Server', 'MySQL', 'MongoDB', 'Snowflake']
    },
    {
        title: 'Delivery and tools',
        items: ['Agile / Scrum', 'Git', 'GitHub', 'GitLab', 'GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Docker', 'YAML', 'Eclipse', 'IntelliJ IDEA', 'BrowserStack', 'JIRA']
    }
];

const certifications = [
    'Azure Fundamentals (AZ-900)',
    'Azure AI Fundamentals (AI-900)',
    'Azure Developer Associate (AZ-204)',
    'Salesforce Certified Agentforce Specialist',
    'Agile Software Development — Coursera'
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
                <p className="eyebrow">EXPERIENCE</p>
                <h2>Quality engineering at Capgemini</h2>
                <p>
                    I’ve worked at Capgemini since September 2021, testing enterprise products
                    across retail banking, insurance, other financial services, and fleet management.
                    My work covers functional testing, automation, APIs, regression, and defect
                    management.
                </p>
                <p>
                    I work with developers, business analysts, product owners, and Scrum teams to
                    understand requirements, check important workflows, and share clear test results.
                </p>
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

            <section className="about-book">
                <p className="eyebrow">PERSONAL INTERESTS</p>
                <h2>People, teams, and how they work.</h2>
                <p>
                    I also enjoy reading about psychology and human resources. Learning how people
                    think, communicate, and work in teams helps me keep user needs and teamwork in
                    mind when I test software.
                </p>
            </section>
        </div>
    </main>
);

export default About;
