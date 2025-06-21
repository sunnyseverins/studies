let user = { name: "John", years: 30 };

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// create variables via destructuring

let {name, years: age, isAdmin = false} = user;

console.log( name );
console.log( age );
console.log( isAdmin );