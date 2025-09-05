// Output the N-th number in Fibonacci sequence fib(N) with recursion
let x = fib(15);

function fib(n) {
    if (isNaN(1 * n) || n < 0)
        return 'not cool bro';
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(x);

// Recursion masochism speedtest:
let test = 0;
let temp = Date.now();
for (let i = 2; i < 42 ; i++) {
    test = fib(i);
    console.log(`recursion: N = ${i} is ${test}, ${Date.now() - temp}ms`);
}
console.log('\nIt took approx. 150s to reach 47th! I will not let you suffer as much. Compare:')

// Array gigachad perfomance:
let arr = [1, 1];
let time = Date.now();
for (let i = 3; i <= 1476; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
}
console.log(`array push: Max pre-Infinity num (1476th) is ${arr.at(-1)}, ${Date.now() - time}ms`);

// Perfomance by the book that is better than mine >:C (without an array):
let start = Date.now();
let a = 1;
let b = 1;
for (let i = 3; i <= 1476; i++) {
    let c = a + b;
    a = b;
    b = c;
}
console.log(`example solution: Max pre-Infinity num (1476th) is ${b}, ${Date.now() - start}ms`);