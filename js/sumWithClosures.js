// Write function sum that works like this: 
// sum(a)(b) = a+b.
// Yes, exactly this way, using double parentheses (not a mistype).

console.log( sum(15)(18) );

function sum(a) {
  return function(b) {
    return a + b;
  }
}