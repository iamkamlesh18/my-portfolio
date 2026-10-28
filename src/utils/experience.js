const startYear = 2021;
const startMonth = 8;
const startDay = 30;

export const getExperienceYearsMonths = (today = new Date()) => {
    let completedMonths = (today.getFullYear() - startYear) * 12 + today.getMonth() - startMonth;
    const lastStartDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    if (today.getDate() < Math.min(startDay, lastStartDay)) {
        completedMonths -= 1;
    }

    completedMonths = Math.max(0, completedMonths);

    return `${Math.floor(completedMonths / 12)}.${completedMonths % 12}`;
};
