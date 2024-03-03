// Heap Sort
// Heap Sort method uses the Binary Heap data structure for comparison-based sorting. In heap sort, each element in the list is eliminated from the heap part of the list, then it is inserted into the sorted part of the list. The remaining elements are sorted in the same manner.
function heapSort(arr) {
    buildMaxHeap(arr); // Convert the array into a max heap
    let lastIndex = arr.length - 1;
    while (lastIndex > 0) {
        swap(arr, 0, lastIndex); // Swap the root (maximum element) with the last element
        heap(arr, 0, lastIndex); // Reconstruct the heap without the last element
        lastIndex--; // Decrease the size of the heap
    }
    return arr;
}

function buildMaxHeap(arr) {
    const len = arr.length;
    // Start from the parent of the last element and move up to the root
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heap(arr, i, len); // Heap each subtree
    }
}

function heap(arr, index, size) {
    const left = 2 * index + 1; // Left child index
    const right = 2 * index + 2; // Right child index
    let largest = index; // Assume the current node is the largest

    // Check if left child is larger than current largest
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child is larger than current largest
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // If the largest node is not the current node, swap them and continue heapifying
    if (largest !== index) {
        swap(arr, index, largest);
        heap(arr, largest, size);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);
const sortedArray = heapSort(array);
console.log("Sorted Array:", sortedArray);


