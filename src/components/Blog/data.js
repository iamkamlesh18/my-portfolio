// Structured blog data with categories, posts and interview questions
export const blogData = {
  admin: {
    title: 'Admin',
    description: 'Salesforce administration topics: users, security, sharing, data management, automation.',
    posts: [
      {
        slug: 'what-is-salesforce',
        title: 'What is Salesforce?',
        summary: 'Overview of Salesforce platform, clouds and core capabilities.',
        content: `Salesforce is a cloud-based CRM platform that helps businesses manage customers, sales,
service, marketing, and more. It provides declarative tools like Flows and Process Builder, a
programmable runtime with Apex, modern UI with Lightning Web Components (LWC), and an ecosystem
of managed packages. The platform supports security models, data model customization, and integrations via APIs.`,
        interview: [
          'What are Profiles vs Permission Sets?',
          'How does Role Hierarchy affect record visibility?',
          'Explain different data import options in Salesforce.'
        ]
      },
      {
        slug: 'security-and-sharing',
        title: 'Security & Sharing Model',
        summary: 'Principles of access control in Salesforce and best practices.',
        content: `A secure Salesforce setup uses org-wide defaults, role hierarchy, sharing rules,
permission sets, and profiles. Follow least-privilege principles, avoid overly-broad CRUD/FLS,
and audit via Field History and Login History. Consider Shield or Event Monitoring for advanced needs.`,
        interview: [
          'What is OWD and why is it important?',
          'How do sharing rules differ from manual sharing?',
          'When would you use Permission Set Groups?'
        ]
      }
    ]
  },
  development: {
    title: 'Development',
    description: 'Apex, LWC, Flows and development best practices.',
    posts: [
      {
        slug: 'apex-and-triggers',
        title: 'Apex, Triggers & Best Practices',
        summary: 'Server-side programming with governor-limit-aware design.',
        content: `Apex is Salesforce's Java-like language. Design bulk-safe triggers,
use asynchronous techniques for long-running work, cache queries where possible, and write
comprehensive tests. Avoid SOQL/DML in loops and leverage platform features before coding.`,
        interview: [
          'How do you write bulk-safe triggers?',
          'When to use Queueable vs Future vs Batch Apex?',
          'How do you mock callouts in tests?'
        ]
      },
      {
        slug: 'lwc-essentials',
        title: 'Lightning Web Components (LWC) Essentials',
        summary: 'Modern UI development on Salesforce using web standards.',
        content: `LWC follows web standards (Custom Elements, Shadow DOM). It provides better
performance than Aura and integrates well with Apex. Use @wire for reactive data and keep
components small and testable.`,
        interview: [
          'Explain LWC lifecycle hooks.',
          'How do you call Apex imperatively from LWC?',
          'What is @api, @track and @wire?'
        ]
      }
    ]
  }
};
