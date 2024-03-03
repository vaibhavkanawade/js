//What is Linear Search?
// Linear search is a simple searching algorithm that sequentially checks each element in a list or array until the desired element is found or the end of the array is reached. It is also known as a sequential search.

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index where the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}
let array = [3, 6, 2, 8, 1, 9, 5];
let target = 8;
let result = linearSearch(array, target);
if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
