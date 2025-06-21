let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

// make the function output an array without duplicates

function unique(arr) {
  let filteredArr = [];
  arr.forEach(value => {
    if (!filteredArr.includes(value)) filteredArr.push(value);
  })
  return filteredArr;
  //or using "filter" as I was asked:
  let uniqueSet = new Set(arr);
  const filteredArr2 = arr.filter(value => uniqueSet.delete(value));
  return filteredArr2;
  //it is better be:
  let uniqueSet2 = new Set(arr);
  return Array.from(uniqueSet2);
}