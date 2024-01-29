//find the even number 

function even(arr){
    let newArr = [];
for(let i=0;i<arr.length;i++){
    if(arr[i] %2 ==0){
          newArr.push(arr[i]);
    }
}
return newArr;

    
}
let arr=[1,2,3,5,6];
console.log(even(arr));



//sum of even number
function sumEven(arr){
let sum = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 ==0){

        sum +=arr[i];
    }
}
return sum;

}

let arr1=[1,2,3,4,5,6];
console.log(sumEven(arr1));