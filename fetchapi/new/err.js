// function err(ele) {
//     switch (ele) {
//         case 1:
//             return "check the fun";
//         case 2:
//             return "emargancy stop";
//         case 3:
//             return "pump err";
//         case 4:
//             return "c e4";
//         case 5:
//             return "temp error";
//         default:
//             return 101
//     }

// }

// console.log(err(10));


function Err(ele) {
    if (ele === 1) {
        return "one error";
    } else if (ele === 2) {
        return "not type 2";
    } else {
        return 101;
    }
}
console.log(Err(1));