function checkpalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


function filterPal(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkpalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = ["madam", "121", 121, "sir"];
console.log(filterPal(arr));



