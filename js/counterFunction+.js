// Modify a makeCounter() so that the counter can also decrease and set the number:

let counter = makeCounter();

console.log( counter() );
console.log( counter() );
console.log( counter.set(15) );
console.log( counter.decrease() );

// Solution:

function makeCounter() {
  let count = 0;
  
  return function func() {
    func.set = function(value) {
      return count = value;
    }
    func.decrease = function() {
      return --count;
    }
    return ++count;
  }
}

