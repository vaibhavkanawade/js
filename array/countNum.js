function countArr(arr) {

    const occures = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        occures[num] = (occures[num] || 0) + 1;

    }
    //Gives in array format output
    // const result = [];
    // for (const num in occures) {
    //     result.push([parseInt(num), occures[num]]);
    // }
    // return result;
    return occures;


}

let arr = [1, 2, 22, 3, 3, 3, -1, -1];
console.log(countArr(arr));