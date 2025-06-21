let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );

// filter out anagrams (must return 3 words here)

function aclean(arr) {
    //    uniqueSortedLetterCombinationArray
    const uniqueMince = arr.map(word => word.toLowerCase().split('').sort().join(''));
    let anagramSet = new Set(uniqueMince);
    let filteredArr = [];
    uniqueMince.forEach((value, index) => {
        if (anagramSet.delete(value)) filteredArr = filteredArr.concat(arr[index]);
    })
    return filteredArr;
}