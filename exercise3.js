var a =("Случайные цифры")
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert( randomInteger(0, 100) );
console.log (rand)
