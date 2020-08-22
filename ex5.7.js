'use strict';

const shortestWord = (str) => {
    let wordArr = str.split(' ');
    let currentLength = wordArr[0].length;  //initialize 'currentLength' with the first word length
    wordArr.filter(word => {
        return ((word.length < currentLength) ? currentLength = word.length : currentLength);
    });
    return currentLength;
}

console.log(shortestWord('This is a string'));
console.log(shortestWord('This is another string'));
