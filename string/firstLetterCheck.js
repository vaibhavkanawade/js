//Identify the first charater in a string that does not repeate elsewhere

//Input= programming
// output = p


function firstNonReapetChar(input) {
    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        for (let j = 0; j < input.length; j++) {
            if (i !== j && currentChar === input[j]) {
                break;
            }
        }
        return null;
    }
}


let input1 = "programming";
console.log(firstNonReapetChar(input1));