// function removeDuplicate(arr) {

//     let res = new Set(arr);
//     let result = Array.from(res);
//     return result;


// }

// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4];
// console.log(removeDuplicate(arr));

function removeDuplicate(arr) {
    const originalArr = [];
    const duplicateArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!originalArr.includes(arr[i])) {
            originalArr.push(arr[i]);
        } else {
            duplicateArr.push(arr[i]);
        }
    }
    originalArr.sort();
    duplicateArr.sort();
    return { originalArr, duplicateArr };


}

let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 6, 5, 5, 0, 8, 9, 0];
console.log(removeDuplicate(arr));