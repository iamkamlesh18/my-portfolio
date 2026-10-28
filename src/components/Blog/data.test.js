import { allPosts, blogData, projectStories } from './data';

describe('QA notes and project details', () => {
    test('every topic and note has readable, complete content', () => {
        expect(blogData.length).toBeGreaterThan(0);
        expect(allPosts.length).toBeGreaterThan(20);

        allPosts.forEach((article) => {
            expect(article.title).toBeTruthy();
            expect(article.summary).toBeTruthy();
            expect(article.minutes).toBeGreaterThan(0);
            expect(article.sections.length).toBeGreaterThan(0);
            expect(article.sections.every((section) => section.heading)).toBe(true);
        });
    });

    test('chapter routes are unique across the library', () => {
        const routes = allPosts.map((article) => `${article.categorySlug}/${article.slug}`);
        expect(new Set(routes).size).toBe(routes.length);
    });

    test('project notes explain the domain, testing focus, and outcome', () => {
        expect(projectStories.map((story) => story.projectName)).toEqual([
            'Union Bank',
            'Elements Fleet Management',
            'Cooperative Banking'
        ]);
        projectStories.forEach((story) => {
            expect(story.domain).toBeTruthy();
            expect(story.projectFocus.length).toBeGreaterThan(0);
            expect(story.result).toBeTruthy();
            expect(story.sections.length).toBeGreaterThan(1);
        });
        expect(projectStories[2].tools).toContain('Serenity BDD');
    });
});
