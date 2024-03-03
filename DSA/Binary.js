// What is Binary Search Algorithm?
// Binary search is an efficient searching algorithm that works on sorted arrays. It repeatedly divides the 
// search interval in half until the target element is found or the interval is empty. It compares the target 
// value to the middle element of the array and eliminates half of the remaining elements based on the comparison.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;

}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let target = 5;
let res = binarySearch(arr, target);
console.log(res);









