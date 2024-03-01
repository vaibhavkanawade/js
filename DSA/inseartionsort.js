// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It iterates through the input elements, removing one element from the input data and then finding the location it belongs to in the already-sorted portion of the array. It repeats this process until no more unsorted elements remain.



function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current;
    }
    return array;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
