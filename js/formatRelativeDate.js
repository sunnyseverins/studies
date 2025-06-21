// Write a function formatDate(date) that should format date as follows:

// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: 
// "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

console.log( formatDate(new Date(new Date - 1)) ); // "right now"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
console.log( formatDate(new Date(new Date - 24 * 3600 * 1000)) ); // current time, but yesterday


function formatDate(date) {
    let relativeTime = '';
    timeDifference = Date.now() - +date;
    switch (true) {
        case (timeDifference < 1000):
            relativeTime += "right now";
            break;
        case (timeDifference < 60 * 1000):
            relativeTime += timeDifference / 1000 + " sec. ago";
            break;
        case (timeDifference < 60 * 60 * 1000):
            relativeTime += timeDifference / (60 * 1000) + " min. ago";
            break;
        default: // backticks retain any whitespace count T-T
            relativeTime += `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
    return relativeTime;
}