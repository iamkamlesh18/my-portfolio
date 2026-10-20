import React from 'react';
import './About.css';

const testingAreas = [
    'Functional testing',
    'Regression testing',
    'Smoke and sanity testing',
    'Integration and end-to-end testing',
    'Exploratory and risk-based testing',
    'Test scenario and case design',
    'Boundary value and equivalence partitioning',
    'Decision table and negative testing',
    'Defect reporting, retesting and root cause analysis'
];

const skillGroups = [
    {
        title: 'Programming',
        skills: 'Java, OOP, collections, exception handling, streams, lambdas and file handling'
    },
    {
        title: 'Web automation',
        skills: 'Selenium WebDriver, XPath, CSS selectors, explicit and fluent waits, frames, windows, alerts, dropdowns and JavaScript Executor'
    },
    {
        title: 'BDD and frameworks',
        skills: 'Serenity BDD, Cucumber, Gherkin, TestNG, JUnit, Page Object Model and data-driven testing'
    },
    {
        title: 'API testing',
        skills: 'REST Assured, Postman, JSON, HTTP methods, authentication and request/response validation'
    },
    {
        title: 'DevOps and CI/CD',
        skills: 'Git, GitHub, GitLab, Jenkins, Docker and automated test pipelines'
    },
    {
        title: 'Data and platforms',
        skills: 'SQL, SQL Server, MySQL, MongoDB, Snowflake, BrowserStack, mobile and cross-browser testing, and mainframe integration'
    }
];

const contributions = [
    {
        title: 'Resilient credential handling',
        description: 'Handled changing credentials after database refreshes with an alternate login strategy, reducing avoidable test failures and manual intervention.'
    },
    {
        title: 'Reliable synchronization',
        description: 'Replaced timing assumptions with application-state synchronization for dynamic pages and loading indicators, improving test stability.'
    },
    {
        title: 'Reusable automation',
        description: 'Built modular Page Object Model components and reusable BDD steps to reduce duplication across business scenarios.'
    },
    {
        title: 'Parameterized locators',
        description: 'Used reusable, parameterized locator strategies for dynamic UI elements to make the framework easier to maintain.'
    }
];

const certifications = [
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    'Microsoft Certified: Azure Developer Associate (AZ-204)',
    'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    'Salesforce Certified Agentforce Specialist',
    'Agile Software Development — Coursera'
];

const About = () => (
    <div className="about">
        <section className="about-section" aria-labelledby="about-heading">
            <h1 className="about-heading" id="about-heading">About Me</h1>

            <div className="about-intro">
                <p>
                    I am a Software Development Engineer in Test (SDET) and Automation Test
                    Engineer with 4+ years of experience in software testing, automation and
                    quality engineering. I have worked across banking, financial services and
                    fleet management, contributing to functional testing, framework development,
                    API validation, defect management and Agile delivery.
                </p>
                <p>
                    My primary automation stack is Java, Selenium WebDriver, Serenity BDD,
                    Cucumber, TestNG and REST Assured. I enjoy solving synchronization,
                    dynamic-element, flaky-test and test-data challenges—and building quality
                    into the development lifecycle.
                </p>
            </div>

            <section className="about-block" aria-labelledby="experience-heading">
                <h2 id="experience-heading">Experience</h2>
                <article className="about-item experience-item">
                    <div className="experience-heading">
                        <h3>Senior Software Engineer — Capgemini</h3>
                        <span>September 2021 – Present</span>
                    </div>
                    <ul>
                        <li>Develop and maintain automated suites with Java, Selenium WebDriver, Serenity BDD and Cucumber.</li>
                        <li>Design reusable Page Object Model components, BDD scenarios, step definitions, hooks and test steps.</li>
                        <li>Perform functional, regression, smoke, sanity, integration and end-to-end testing.</li>
                        <li>Validate REST APIs with Postman and REST Assured, and verify application data with SQL.</li>
                        <li>Support CI/CD test execution using Git, GitLab/GitHub and Jenkins.</li>
                        <li>Collaborate in Agile/Scrum ceremonies with developers, business analysts, product owners and scrum masters.</li>
                    </ul>
                </article>
            </section>

            <section className="about-block" aria-labelledby="contributions-heading">
                <h2 id="contributions-heading">Automation Contributions</h2>
                <div className="about-grid">
                    {contributions.map((contribution) => (
                        <article className="about-item" key={contribution.title}>
                            <h3>{contribution.title}</h3>
                            <p>{contribution.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-block" aria-labelledby="testing-heading">
                <h2 id="testing-heading">Testing Expertise</h2>
                <ul className="skill-list">
                    {testingAreas.map((area) => <li key={area}>{area}</li>)}
                </ul>
            </section>

            <section className="about-block" aria-labelledby="stack-heading">
                <h2 id="stack-heading">Automation Stack</h2>
                <div className="about-grid">
                    {skillGroups.map((group) => (
                        <article className="about-item" key={group.title}>
                            <h3>{group.title}</h3>
                            <p>{group.skills}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-block" aria-labelledby="domains-heading">
                <h2 id="domains-heading">Domain Experience</h2>
                <div className="about-grid">
                    <article className="about-item">
                        <h3>Banking and financial services</h3>
                        <p>Enterprise customer and account workflows, authentication, transaction-related functionality, regression and integration validation, and production and environment checks.</p>
                    </article>
                    <article className="about-item">
                        <h3>Fleet management</h3>
                        <p>Functional testing, automation and regression testing for enterprise fleet management applications.</p>
                    </article>
                </div>
            </section>

            <section className="about-block" aria-labelledby="certifications-heading">
                <h2 id="certifications-heading">Certifications</h2>
                <ul className="skill-list">
                    {certifications.map((certification) => <li key={certification}>{certification}</li>)}
                </ul>
            </section>

            <div className="about-grid about-details">
                <section className="about-item" aria-labelledby="education-heading">
                    <h2 id="education-heading">Education</h2>
                    <h3>Bachelor of Engineering — Mechanical Engineering</h3>
                    <p>R. C. Patel Institute of Technology, Shirpur · 2019</p>
                    <h3>Diploma — Mechanical Engineering</h3>
                    <p>Smt. S. Patil Institute of Technology, Chopda · 2016</p>
                </section>
                <section className="about-item" aria-labelledby="learning-heading">
                    <h2 id="learning-heading">Currently Learning</h2>
                    <p>Advanced SDET architecture, Playwright, Cypress, API automation, CI/CD automation, cloud testing, AI-assisted testing, generative AI for quality engineering and agentic AI testing.</p>
                </section>
            </div>

            <blockquote className="engineering-philosophy">
                <p>“Don’t automate everything. Automate what creates value.”</p>
                <cite>Good testing finds defects. Great automation builds confidence. Exceptional quality engineering helps teams ship better software faster.</cite>
            </blockquote>
        </section>
    </div>
);

export default About;
