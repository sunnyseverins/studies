// The result of 'debounce(f, ms)' decorator is a wrapper that suspends calls to
// 'f' until there's 'ms' milliseconds of inactivity (no calls), then invokes 'f'
// once with the latest arguments.
let f = debounce(console.log, 1000);

f('a');
console.log(Date.now())
setTimeout( () => f('b'), 200);
setTimeout( () => f('c'), 500);

function debounce(func, ms) {
  let timerID;
  return function(message) {
    clearTimeout(timerID);
    timerID = setTimeout( () => {func(message)}, ms);
  }
}