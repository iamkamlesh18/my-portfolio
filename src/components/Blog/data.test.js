import { allPosts, blogData } from './data';

describe('quality engineering reading library', () => {
    test('every learning path and chapter has complete reading content', () => {
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
});
