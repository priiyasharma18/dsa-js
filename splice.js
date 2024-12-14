// difference between slice and splice


// slice -> Purpose: Extracts a portion of an array without modifying the original array.
//          Returns: A new array containing the selected elements.
//          Syntax: array.slice(start, end)
//          Does not mutate the original array


const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4); // [2, 3, 4]
console.log(sliced);           // [2, 3, 4]
console.log(arr);              


// splice()

/*
Purpose: Adds, removes, or replaces elements in an array by modifying the original array.
Returns: An array of the removed elements.
Syntax: array.splice(start, deleteCount, ...items)
start: The index at which to begin changes.
deleteCount: The number of elements to remove (can be 0).
...items: The elements to add to the array at the start position.
Mutates the original array.
*/

const ar = [1, 2, 3, 4, 5];
const spliced = ar.splice(1, 2, 'a', 'b'); // Removes 2 elements starting at index 1, and adds 'a' and 'b'
console.log(spliced);                       // [2, 3] (removed elements)
console.log(ar);  

/*
Feature	slice()	splice()
Purpose	Extracts a portion of the array	Modifies the array (add/remove/replace)
Return Value	New array with extracted elements	Array of removed elements
Mutates Array	No	Yes
Use Case	Copy or extract elements	Add, remove, or replace elements
*/