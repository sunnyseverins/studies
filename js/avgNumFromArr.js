const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 29 };

const arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );

// return average age

function getAverageAge(users) {
    const ageCombined = users.reduce((ageSum, user) => ageSum + user.age, 0);
    return ageCombined / users.length;
}
