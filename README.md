# Kamlesh Patil — QA Engineer Portfolio

A portfolio showing Kamlesh Patil's experience in software testing and test automation, project work, skills, and beginner-friendly testing guides.

## Pages

- **Home** — QA profile, experience, and selected projects
- **Projects** — banking and fleet management project details
- **Skills** — testing methods, languages, tools, certifications, and education
- **Guides** — clear explanations of testing, automation, APIs, and project work, from beginner ideas to practical examples

The guides and project content live in `src/components/Blog/data.js`. Topic and guide pages are generated from that data.

## Run locally

```sh
npm ci
npm start
```

## Validate and deploy

```sh
npm test -- --watchAll=false
npm run build
```

The GitHub Actions workflow publishes the production build to GitHub Pages when changes are pushed to `master`.

The site uses hash-based routes, for example:

```text
https://iamkamlesh18.github.io/my-portfolio/#/projects
https://iamkamlesh18.github.io/my-portfolio/#/guides/project-stories/cooperative-bank-automation
```

The hash keeps pages working when visitors refresh or open a direct link on GitHub Pages.
