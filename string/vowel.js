//count the vowel
function checkVowel(str){
let count = 0;
for(let i=0;i<str.length;i++){
    let char = str[i];
    if( char === "a"|| char === "e" || char === "i"|| char === "o"||char ==="u"){
    count ++;
    }
}
return count;


}
let string  = "My dream comapany";
console.log(checkVowel(string));

//check vowel is present in string or not


function vowel(str){
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"){
            return "true";
        }
    }
    return "false";

}
let str="My dream comapany";
console.log(vowel(str));