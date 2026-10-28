# Kamlesh Patil — QA Engineer Portfolio

A personal portfolio introducing Kamlesh Patil, his five years in quality assurance, and his project journey through banking, fleet management, and test automation. Project stories include simple interview answers and questions to practise; learning notes offer more detail about testing and tools.

## Explore the site

- **Start here** — a personal introduction and a chronological project journey
- **My projects** — simple interview answers and practice questions for each project
- **About me** — work experience, approach, skills, and learning journey
- **Learning notes** — searchable chapters about testing foundations, Agile and BDD, automation, and engineering practice

The journal content lives in `src/components/Blog/data.js`. Add chapters there and group them under a learning path; the reading room and chapter navigation are generated from that data.

## Run locally

```sh
npm ci
npm start
```

## Validate and deploy

```sh
npm run build
```

The GitHub Actions workflow publishes the production build to GitHub Pages when changes are pushed to `master`.

The site uses hash-based client-side routes, for example:

```text
https://iamkamlesh18.github.io/my-portfolio/#/journal
https://iamkamlesh18.github.io/my-portfolio/#/journal/project-stories/cooperative-bank-automation
```

The hash keeps chapter and category navigation working when a visitor refreshes or opens a deep link on GitHub Pages.
