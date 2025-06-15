let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

//solution
function getAverageAge(users) {
    let sum = 0;
    for (let user of users) { // haven't knew arr.reduce
        sum += user.age;
    }
    let averageAge = sum / users.length;
    return averageAge;
}
//solution

console.log( getAverageAge(arr) );