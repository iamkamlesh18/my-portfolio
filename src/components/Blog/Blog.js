import React from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: 'What is Salesforce? An Overview',
    summary:
      'Salesforce is a cloud-based CRM platform that helps businesses manage sales, service, marketing, and more.',
    content:
      `Salesforce is a leading customer relationship management (CRM) platform that enables organizations to manage customer data,
automate business processes, and build custom applications. Core products include Sales Cloud, Service Cloud, Marketing Cloud,
Commerce Cloud, and Platform (Force.com). It provides a metadata-driven architecture, declarative tools like Flows, and programmatic
capabilities via Apex and Lightning Web Components (LWC).`,
    interview: [
      'What is a governor limit in Salesforce and why does it exist?',
      'Explain the difference between a trigger and a Flow.',
      'What are Lightning Web Components and how do they differ from Aura components?'
    ]
  },
  {
    id: 2,
    title: 'Apex, Triggers and Best Practices',
    summary: 'Apex is Salesforce’s strongly typed, object-oriented programming language.',
    content:
      `Apex allows developers to execute flow and transaction control statements on Salesforce servers in conjunction
with calls to the API. Use bulk-safe patterns, avoid SOQL queries inside loops, and write test classes that cover
positive and negative scenarios. Structure code for maintainability and governor-limit awareness.`,
    interview: [
      'How do you write bulk-safe triggers?',
      'When would you use @future or Queueable Apex?',
      'How do you test asynchronous Apex in Salesforce?' 
    ]
  },
  {
    id: 3,
    title: 'Lightning Web Components (LWC) Essentials',
    summary: 'LWC is the modern UI programming model for Salesforce.',
    content:
      `LWC uses web standards (custom elements, shadow DOM) to build fast, reusable UI components. It integrates
with Apex for server-side operations and supports reactive properties for state changes. Prefer LWC for new UI work.
`,
    interview: [
      'Explain the lifecycle hooks available in LWC.',
      'How do you call Apex methods from LWC?',
      'What security considerations apply to LWC (e.g., CSP, Locker Service)?'
    ]
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <h1>Blog — Salesforce Topics & Interview Prep</h1>
        <p>Articles and common interview questions based on practical Salesforce experience.</p>
      </section>

      <section className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-head">
              <h2>{post.title}</h2>
              <p className="blog-summary">{post.summary}</p>
            </div>
            <div className="blog-content">
              <p>{post.content}</p>
              <h4>Interview Questions</h4>
              <ul>
                {post.interview.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
