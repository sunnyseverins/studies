// Create a 'throttling' decorator throttle(f, ms) - that returns a wrapper.
// When it's called multiple times, it passes the call to 'f' at maximum once
// per 'ms' milliseconds.

function f(a) {
  console.log(a);
}
let begin = Date.now();
let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);

// solution

function throttle(f, ms) {
  let delayID
  let tempNum;
  return function wrapper(num) {
    if (!delayID) {
      f(num);
      // Timeout works after script, so no real throttling T-T
      delayID = setTimeout( () => {
        delayID = null;
        return f(tempNum);
      }, ms);
    }
    else tempNum = num;
  }
}
