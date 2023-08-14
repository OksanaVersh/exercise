const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isOdd = (num) => num % 2 !== 0;
const odd = numbers.filter(isOdd);
const iseven = (num) => num % 2 == 0;
const even = numbers.filter(iseven);


console.log(odd);
console.log(even);
