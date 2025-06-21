// Create a function getSecondsToTomorrow() that returns 
// the number of seconds till tomorrow.

console.log( getSecondsToTomorrow() );

function getSecondsToTomorrow() {
    let today = Date.now();
    let tomorrow = new Date().setHours(24, 0, 0, 0);
    return Math.floor((tomorrow - today)/1000);
}
// or setHours(24, 0, -1) without Math.floor, which will
// cause a miniscule mishap when ms = 000