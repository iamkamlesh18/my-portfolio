import { allPosts, blogData, projectStories } from './data';

describe('quality engineering interview book', () => {
    test('every learning path and chapter has an interview question and answers', () => {
        expect(blogData.length).toBeGreaterThan(0);
        expect(allPosts.length).toBeGreaterThan(20);

        allPosts.forEach((article) => {
            expect(article.title).toBeTruthy();
            expect(article.question).toMatch(/\?$/);
            expect(article.summary).toBeTruthy();
            expect(article.minutes).toBeGreaterThan(0);
            expect(article.sections.length).toBeGreaterThan(0);
            expect(article.sections.every((section) => section.question.endsWith('?'))).toBe(true);
            expect(article.sections.every((section) => section.paragraphs?.length || section.bullets?.length)).toBe(true);
        });
    });

    test('chapter routes are unique across the library', () => {
        const routes = allPosts.map((article) => `${article.categorySlug}/${article.slug}`);
        expect(new Set(routes).size).toBe(routes.length);
    });

    test('Rainbow project chapter explains the custom framework and both execution paths', () => {
        expect(projectStories.map((story) => story.projectName)).toEqual([
            'Rainbow custom automation framework'
        ]);
        expect(projectStories[0].interviewAnswer).toMatch(/custom automation framework/i);
        expect(projectStories[0].interviewAnswer).toMatch(/locally/i);
        expect(projectStories[0].interviewAnswer).toMatch(/Jenkins/i);
        expect(projectStories[0].sections.map((section) => section.heading)).toContain('How to explain the framework architecture');
    });
});
