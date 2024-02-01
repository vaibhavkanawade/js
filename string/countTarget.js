function check(str, target) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            count++;
        }

    }
    if (str === 0) {
        return "not found";
    } else {
        console.log("found");
        return count;
    }
}
let string = "avasciptjjjj";
let target = "j";
console.log(check(string, target));