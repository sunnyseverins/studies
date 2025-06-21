// Write a function getLastDayOfMonth(year, month) that returns the last day of month.
getLastDayOfMonth(2012, 1); // = 29
getLastDayOfMonth(2025, 5); // = 30

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}