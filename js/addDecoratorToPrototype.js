// Add to the prototype of all functions the method 'defer(ms)'
// that runs the function after 'ms' miliseconds.

function f(a, b) {
  alert( a + b );
}

// Solution
Function.prototype.defer = function(t) {
  function delay(a, b) {
    setTimeout( () => { f(a, b) }, t);
  }
  return delay;
}

// Test
f.defer(3000)(1,2);