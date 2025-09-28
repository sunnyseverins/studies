// We’ve got an array of objects to sort:
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// So, instead of writing a function, just put byField(fieldName).
// Write the function byField that can be used for that:
users.sort( byField( 'name') );
users.sort( byField( 'age') );

// Solution
function byField(str) {
  return function(a, b) {
    return a[str] > b[str] ? 1 : -1;
  }
}