import { allPosts, blogData, projectStories } from './data';

describe('testing guides and project details', () => {
    test('every topic and note has readable, complete content', () => {
        expect(blogData.length).toBeGreaterThan(0);
        expect(allPosts.length).toBeGreaterThan(20);

        allPosts.forEach((article) => {
            expect(article.title).toBeTruthy();
            expect(article.summary).toBeTruthy();
            expect(article.minutes).toBeGreaterThan(0);
            expect(article.sections.length).toBeGreaterThanOrEqual(3);
            expect(article.sections.every((section) => section.heading)).toBe(true);
            expect(article.takeaway).toBeTruthy();
            expect(article.exercise).toBeTruthy();
        });
    });

    test('chapter routes are unique across the library', () => {
        const routes = allPosts.map((article) => `${article.categorySlug}/${article.slug}`);
        expect(new Set(routes).size).toBe(routes.length);
    });

    test('project notes explain the domain, testing focus, and outcome', () => {
        expect(projectStories.map((story) => story.projectName)).toEqual([
            'Union Bank',
            'Elements',
            'COOP — Retail COOP and Smile Portal',
            'RSA Intact Insurance'
        ]);
        projectStories.forEach((story) => {
            expect(story.domain).toBeTruthy();
            expect(story.projectFocus.length).toBeGreaterThan(0);
            expect(story.result).toBeTruthy();
            expect(story.sections.length).toBeGreaterThan(1);
            expect(story.contributions.length).toBeGreaterThan(0);
        });
        expect(projectStories[1].result).toContain('60%');
        expect(projectStories[2].result).toContain('40%');
        expect(projectStories[3].contributions.join(' ')).toMatch(/requirements|Scrum|automation/i);
    });
});
