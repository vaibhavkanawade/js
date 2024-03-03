// Selection Sort
// The Selection Sort is an in-place comparison-based algorithm that divides the list into two portions: the sorted portion on the left and the unsorted portion on the right. The leftmost element of the unsorted array is swapped with the smallest element from the unsorted array, and the smallest element is part of the sorted array. The unsorted array boundary is moved one element to the right throughout this process.



function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}


const array = [64, 25, 12, 22, 11];
console.log("Original Array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted Array:", sortedArray);
