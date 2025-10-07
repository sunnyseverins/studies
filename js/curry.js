// Currying task:
console.log( sum(1, 2, 3)(4)(5, -10) );

function sum(...args) {
  for (const arg of args) {
    sum.result = (sum.result ?? 0) + arg;
  }
  sum.toString = function() {
    return sum.result;
  }
  return sum;
}
