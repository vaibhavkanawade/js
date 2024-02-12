// function reverse(arr) {
//     let res = arr.reverse();
//     return res;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(reverse(arr));

//not using inbulit method 

function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
let arr = [1, 4, 4, 7];
console.log(bubbleSort(arr));
