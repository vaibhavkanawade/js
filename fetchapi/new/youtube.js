// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.


function countUpload(date, month) {
    month = month.toLowerCase();
    let uploadCount = 0;
    for (let i = 0; i < date.length; i++) {
        let [Month, day] = date[i].split(' ');

        Month = Month.toLowerCase();
        if (Month === month) {
            uploadCount++;
        }

    }
    return uploadCount;
}
const date = ["Dec 2", "Nov 5", "Jan 5", "dec 3"];
const month = "Dec";
console.log(countUpload(date, month));
