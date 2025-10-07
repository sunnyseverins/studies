// Write a function printNumbers(from, to) that outputs a number every second, starting 'from' 
// from and ending with 'to'. Make two variants of the solution.
//  1. Using setInterval()
//  2. Using nested setTimeout()

printNumbers2(1, 15);

function printNumbers1(from, to) {
  if (from > to) return;

  let currentNum = from;
  let timerID = setInterval(() => {
    console.log(currentNum);
    currentNum++;
    if (currentNum > to) clearInterval(timerID);
  }, 1000, to);
}

function printNumbers2(from, to) {
  if (from > to) return;

  let currentNum = from;
  setTimeout(printAndIncrement, 1000);

  function printAndIncrement() {
    console.log(currentNum);
    currentNum++;
    if (currentNum > to)
      return;
    else
      setTimeout(printAndIncrement, 1000);
  }
}