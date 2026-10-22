# Kamlesh Patil — Quality Engineering Field Guide

An experience-led portfolio and reading space about software testing, quality engineering, and building automation that teams can trust.

## Explore the site

- **Start here** — quality principles and featured project lessons
- **The field guide** — searchable chapters across testing foundations, manual testing, Agile and BDD, automation, engineering practice, and project stories
- **Project stories** — lessons from banking, fleet management, and cooperative banking work
- **About Kamlesh** — the engineer’s perspective, working philosophy, and learning journey

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
