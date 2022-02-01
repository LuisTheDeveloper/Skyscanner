export const getDateTimeDiff = (date1, date2) => {
    const diffDates = new Date(date2) - new Date(date1);
    const calcHours = (diffDates) / (1000 * 60 * 60);
    const calcMinutes = (diffDates) / (1000 * 60);

    let hours; let mins;

    if (calcMinutes % 60 === 0) return `${calcHours}h 00`;
    if (calcHours < 1) return `0h ${calcMinutes}`;

    if (calcHours > 1) {
        hours = Math.floor(calcHours);
        mins = calcMinutes % 60;
    }

    return `${hours}h ${mins}`;
};
