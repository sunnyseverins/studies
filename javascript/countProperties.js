let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2

// count properties

function count(obj) {
    return Object.keys(obj).length;
}