// Write a function getSecondsToday() that returns the 
// number of seconds from the beginning of today.

console.log( getSecondsToday() );

function getSecondsToday() {
    return (Date.now() - new Date().setHours(0, 0, 0))/1000;
}