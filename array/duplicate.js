function removeDuplicate(arr){

    let res= new Set(arr);
    let result= Array.from(res);
    return result;


}

let arr=[1,2,3,4,5,1,2,3,4];
console.log(removeDuplicate(arr));