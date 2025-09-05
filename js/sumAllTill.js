// Create sumTo() function to find a sum of all numbers 
// betwwen 1 and a given positive number via recursion, 
// for loop and math magic (arithmetic series).
sumTo(1000000);

function sumTo(n) {
    let output = '';
    const t1 = Date.now();
    output += `Sum via recursion is ${sum1(n)}. It took ${Date.now() - t1}ms\n`;
    const t2 = Date.now();
    output += `Sum via for loop is ${sum2(n)}. It took ${Date.now() - t2}ms\n`;
    const t3 = Date.now();
    output += `Sum via arithmetic progression is ${sum3(n)}. It took ${Date.now() - t3}ms\n`;
    console.log(output);
}

function sum1(n) {
    try {
         return sumViaRecursion(n);
    }
    catch {
        return 'not found, stack overflow';
    }
}
function sumViaRecursion(n) {
    if (n === 1)
        return 1;
    else 
        return n + sumViaRecursion(n - 1);
}

function sum2(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum3(n) {
    return (n * (n + 1)) / 2;
}


