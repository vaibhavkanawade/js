
// //find the odd mu,ber in the array
// function odd(arr){
//     let result=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i] %2 !== 0){
//              result.push(arr[i]);
//     }
// }
// return result;
// }
// let arr=[1,2,3,4,5];
// console.log(odd(arr));



//find the sum of odd number
function sumOdd(arr){
    let sumodd=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            sumodd +=arr[i];
        }
    }
    return sumodd;
}

let arr1 = [1,2,3,4,5];
console.log(sumOdd(arr1));


