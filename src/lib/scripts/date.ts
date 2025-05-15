type Date = `${string}-${string}-${string}`;

function getMonthName(m: string): string {
    const months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    return months[parseInt(m) - 1];
}

function getDayName(d: string): string {
    const day = parseInt(d);

    switch (day) {
        case 1:
        case 21:
        case 31:
            return `${day}st`;
        case 2:
        case 22:
            return `${day}nd`;
        case 3:
        case 23:
            return `${day}rd`;
        default: return `${day}th`;
    }
}

export function formatDate(date: Date): string {
    let monthName: string, dayName: string;
    const [year, month, day] = date.split("-");

    monthName = getMonthName(month);
    dayName = getDayName(day);

    return `${monthName} ${dayName}, ${year}`;
}
