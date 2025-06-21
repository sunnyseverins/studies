let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

// return salaries sum. if no entries, return 0

function sumSalaries(entryObj) {
  console.log(5 > null);
    return Object.values(entryObj).reduce((sum, salary) => sum += salary, 0);
}