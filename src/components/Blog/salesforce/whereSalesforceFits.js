// Blog/salesforce/whereSalesforceFits.js

export const whereSalesforceFits = {
  slug: 'where-salesforce-fits',
  title: 'Where Salesforce Fits in Real-World Development & Testing',
  summary:
    'Understand Salesforce using real project flow: development, testing, automation, and deployment.',
  content: [
    {
      heading: 'Salesforce as a Ready-Made Application + Platform',
      points: [
        'In traditional development, teams build UI, backend, database, and infrastructure.',
        'In Salesforce, most of this is already built.',
        'Teams configure and customize instead of building from scratch.'
      ]
    },
    {
      heading: 'What the Client or End User Sees',
      points: [
        'A web-based application accessed through a browser',
        'Screens like Accounts, Contacts, Leads, Opportunities, and Cases',
        'Forms, tables, buttons, reports, and dashboards',
        'Clients do not see code, configurations, or backend logic'
      ]
    },
    {
      heading: 'UI Layer (Frontend Mapping)',
      points: [
        'Traditional apps use React or Angular',
        'Salesforce provides Lightning UI out of the box',
        'Lightning Web Components (LWC) are used for customization',
        'Developers extend UI instead of building it from zero'
      ]
    },
    {
      heading: 'Backend Logic (Server-Side Mapping)',
      points: [
        'Traditional apps use Java, Python, or .NET',
        'Salesforce uses Apex for backend logic',
        'Apex handles validations, triggers, integrations, and business rules'
      ]
    },
    {
      heading: 'Database Layer',
      points: [
        'Traditional systems use SQL databases',
        'Salesforce uses Objects, Fields, and Records',
        'SOQL is used instead of SQL',
        'Salesforce manages storage, scaling, and security automatically'
      ]
    },
    {
      heading: 'Automation & Business Logic',
      points: [
        'Salesforce provides Flows for no-code automation',
        'Process Builder is legacy automation',
        'Apex Triggers are used for complex scenarios',
        'Automation is part of the platform, not an add-on'
      ]
    },
    {
      heading: 'Manual Testing in Salesforce',
      points: [
        'Acceptance criteria come from business or BA',
        'Testers write scenarios and test cases',
        'Testing happens in Dev, QA, and UAT orgs',
        'Manual testing flow remains the same as any other application'
      ]
    },
    {
      heading: 'Automation Testing in Salesforce',
      points: [
        'Selenium can still be used',
        'Salesforce-specific tools like Provar are common',
        'Apex test classes validate backend logic',
        'CI/CD pipelines execute tests automatically'
      ]
    },
    {
      heading: 'CI/CD and Deployment',
      points: [
        'Salesforce uses Git, Jenkins, and Salesforce DX',
        'Metadata moves from Dev → QA → UAT → Production',
        'Deployment flow is similar to any enterprise project'
      ]
    },
    {
      heading: 'Why Companies Choose Salesforce',
      points: [
        'Built-in CRM functionality',
        'Built-in security and access control',
        'Built-in reporting and dashboards',
        'Cloud scalability without infrastructure management'
      ]
    }
  ],
  interview: [
    'Where does Salesforce fit in a typical application architecture?',
    'How is Salesforce different from traditional development?',
    'How does testing in Salesforce compare to normal applications?',
    'What does Salesforce provide out of the box?'
  ]
};
