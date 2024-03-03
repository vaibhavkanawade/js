// Merge sort
// Merge sort works similarly works based on the divide and conquers algorithm and it is similar to quick sort. The merge sort algorithm is very efficient and popular. In this function, the list is divided into two equal halves, a call to itself is made for each half, and the two sorted halves are merged. To merge the data, we must define the merge() function.

// There are multiple sub-lists that are divided into halves until the sub-lists cannot be further divided. We combine the pair of lists of one element into two-element lists, sorting them along the way. In the same way, the sorted pair of two elements gets combined with the sorted list of four elements, and so on.



function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
