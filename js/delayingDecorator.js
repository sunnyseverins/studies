// Create a decorator delay(f, ms) thate delays each call of 'f' by 'ms' milliseconds.

function f(x) {
 console.log(x);
}
// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

// solution

function delay(f, ms) {
  return function(string) {
    setTimeout(() => f(string), ms);
  }
}
