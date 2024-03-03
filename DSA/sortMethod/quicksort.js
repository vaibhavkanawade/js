// Quick sort
// A quick sort algorithm uses a method that divides a large array of data into smaller arrays in order to sort it efficiently. An element is picked as a pivot and the given array is partitioned around it. An array of large values is divided into two arrays, one of which holds values smaller than the pivot value, the value on which the partition is made, and the other array holding values greater than the pivot value. Quicksort partitions around a pivot and then recursively sort the two subarrays based on the first partition.



function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original Array:", array);
const sortedArray = quickSort(array);
console.log("Sorted Array:", sortedArray);
