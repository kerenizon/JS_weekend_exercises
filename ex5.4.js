'use strict';


const toWeirdCase = (str) => {
    let strArr = str.split('');
    const newStr = strArr.map((char, index, arr) => {
        return ((index % 2 === 0) ?  char = char.toUpperCase() : char = char.toLowerCase());
    });
    return newStr.join("");
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));