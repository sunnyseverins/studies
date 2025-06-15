function unique(arr) {
  //solution
  let filteredArr = [];
  arr.forEach(value => {
    if (!filteredArr.includes(value)) filteredArr.push(value);
    console.log(value);
  })
  return filteredArr;
  //solution
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );