let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

topSalary(salaries);

// Create the function that returns the name of the top-paid person.
//     If salaries is empty, it should return null.
//     If there are multiple top-paid persons, return any of them.

function topSalary(salaries) {
    let topPaidName = null;
    let maxSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topPaidName = name;
        }
    }
    console.log(topPaidName)
    return topPaidName;
}