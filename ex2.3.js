'use strict';

const isSquare = (value) => (Math.sqrt(value) % 1 ) === 0;

const findNextSquare = (num) => {
    if (isSquare(num)){
        return Math.pow((Math.sqrt(num) + 1),2);
    }else{
        return -1;
    }
}

console.log(findNextSquare(114));