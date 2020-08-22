'use strict';

const Summation = (num) => {
    let accumulator = 0;
    for(let i=0; i<= num; i++){
        accumulator += i;
    }
    return accumulator;
}

console.log(Summation(8));