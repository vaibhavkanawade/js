function reverse(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i];
    }
    return reverse;

}

let string = "Hello javascipt!!!";
console.log(reverse(string));