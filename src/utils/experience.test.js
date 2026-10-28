import { getExperienceYearsMonths } from './experience';

describe('getExperienceYearsMonths', () => {
    test.each([
        [new Date(2021, 8, 30), '0.0'],
        [new Date(2026, 9, 29), '5.0'],
        [new Date(2026, 9, 30), '5.1'],
        [new Date(2026, 10, 30), '5.2'],
        [new Date(2026, 1, 28), '4.5']
    ])('formats completed months on %s', (date, expected) => {
        expect(getExperienceYearsMonths(date)).toBe(expected);
    });
});
