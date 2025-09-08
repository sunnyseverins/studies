// Write a function to display list values through both loop and recursion.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
printList1(list); // loop ver.
printList2(list); // recursion ver.

// Solution:
function printList1(l) {
    while(l !== null) {
        console.log(l.value);
        l = l.next;
    }
}
function printList2(l) {
    console.log(l.value);
    if (l.next !== null) printList2(l.next);
} 