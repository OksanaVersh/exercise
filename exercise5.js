let arr = [1, 2, 3, 4, 5];

let check = arr.every(function(elem, index, arr) {
    if (elem * index < 30) {
        return true;
    } else {
        return false;
    }
});

console.log(check);

const numbers = [4, 3, 3, 1, 15, 7, 4, 19, 19];
const countItems = {};
for (const item of numbers) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
const result = Object.keys(countItems).filter((item) => countItems[item] > 1);

console.dir(result);

//Вариант 2
let arr = [4, 3, 3, 1, 15, 7, 4, 19, 19];

let check = arr.every(function(elem, index, arr) {
    if (elem * index < 30) {
        return true;
    } else {
        return false;
    }
});
