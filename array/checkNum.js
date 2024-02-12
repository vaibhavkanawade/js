function checkNum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return false;
}
let arr = [1, 2, 3, 4, 5];
let target = 3;
console.log(checkNum(arr));