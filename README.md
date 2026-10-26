# Kamlesh Patil — QA Interview Book

A personal, chapter-wise interview-preparation book for Kamlesh Patil, who has five years of software testing experience. Chapters use interview questions and simple answers, from testing foundations through Java, Selenium, Serenity, and the Rainbow custom automation framework. Rainbow scripts were run locally and through Jenkins.

## Explore the site

- **Introduction** — a concise answer to “Tell me about yourself”
- **Project Q&A** — interview answers about the Rainbow custom framework
- **My journey** — context for the personal preparation book
- **Interview book** — searchable, question-and-answer chapters from basic to advanced topics

Interview content lives in `src/components/Blog/data.js`. Add chapters there and group them under a learning stage; chapter pages render each topic as an interview question with its answer.

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
https://iamkamlesh18.github.io/my-portfolio/#/journal/project-stories/rainbow-framework
```

The hash keeps chapter and category navigation working when a visitor refreshes or opens a deep link on GitHub Pages.
