function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const myArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(myArray);
console.log(shuffledArray); // [5, 3, 1, 2, 4]