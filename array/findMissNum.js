//find the missing number in the array

function getMissingNo(a) {
    let n = arr.length;

    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}

let arr = [1, 2, 3, 5];
let miss = getMissingNo(arr);
console.log(miss);




