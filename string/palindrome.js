function palindrome(str){

    let reverse = "";
    for(let i=str.length-1;i>=0;i--){
        reverse +=str[i];

    }
    if(reverse === str){
        return "It is palindrome";
    }else{
        return "not palindrome";
    }

}
let string = "madam";
console.log(palindrome(string));