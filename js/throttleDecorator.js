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

// Solution by book:
function throttle(f, ms) {
  let delayID
  let tempNum;
  return function wrapper(num) {
    if (!delayID) {
      f(num);
      // Timeout works after script, so no real throttling with test.
      delayID = setTimeout( () => {
        delayID = null;
        return f(tempNum);
      }, ms);
    }
    else tempNum = num;
  }
}

// Throttling that works WITH scripts
setTimeout( () => {
  console.log('CHAD SCRIPT THROTTLING:')
  let checkT = Date.now();
  let b = function(a) {
    console.log(`${a} - ${Date.now() - checkT}ms`);
  }
  b = throttleFIX(b);

  let b1000 = throttleFIX(b, 1000);
  for ( let i = 1; i < 100000000; i++) {
    b1000(i);
  }
}, 2000)


function throttleFIX(f, ms) {
  let lastProc;
  let tempNum;
  let timer;
  let t;
  return function wrapper(num) {
    tempNum = num;
    t = Date.now();
    if ( !(lastProc + ms > t) ) {
      clearTimeout(timer);
      f(num);
      lastProc = t;
      tempNum = undefined;
      timer = setTimeout( () => {
        if (tempNum) f(tempNum);
      }, ms)
    }
  }
}

