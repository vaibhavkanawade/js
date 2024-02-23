// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

function month(num) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    if (num < 1 || num > 12) {
        return "Invalid month number";
    }

    return months[num - 1];

}
console.log(month(3));