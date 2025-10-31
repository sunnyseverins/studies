// Add to the prototype of all functions the method 'defer(ms)'
// that runs the function after 'ms' miliseconds.

function f() {
  alert("Hello!");
}

// Solution
Function.prototype.defer = function(t) {
  setTimeout(this, t);
}

// Test
f.defer(3000);