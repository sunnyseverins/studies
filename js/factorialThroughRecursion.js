// Calculate factorial through recursion
console.log(factorial(21));

function factorial(n) {
    return (n === 1) ? 1 : n * factorial (n - 1);
}