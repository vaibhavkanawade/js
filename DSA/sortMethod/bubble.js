// Bubble Sort
// This is the simplest and easiest sorting algorithm. In this method, two adjacent elements are compared and swapped until they are no longer in the intended order (ie) in ascending or descending order.

// In other words, if a bubble sort is being performed to sort the input in ascending order, it will first compare the first two elements of the array. When the second element is smaller than the first, the algorithm will swap them, and then move on to the next.

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted Array:", sortedArray);
