function countString(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] !== 0 && str[i] !==" "){
            count++;
        }
    }
    return count;

}
let str="hello world!!!";
console.log(countString(str));