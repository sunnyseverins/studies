// The following code creates an array of shooters. But something is wrong.

function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      console.log( i );        // that should show its number
    };
    shooters.push(shooter);    // and add it to the array
    i++;
  }
  return shooters;             // ...and return the array of shooters
}
let army = makeArmy();

army[0]();
army[1]();
army[8]();
army[9](); // but it shows 10 each time. Why? How to fix this?

// Explanation

// Because essentially army becomes an array of functions that call 'i'. But
// as long as it was initialized once, it is a single 'i' throughout all makeArmy(),
// and because of that is outputs console.log(i) with it's one and only 'i'.
//
// Things might be different if we had introduced any other variable in each loop
// iteration, like let j = i, or had initialized 'let i = 0' in a 'for' loop, that
// actually creates new i in each repeat.
