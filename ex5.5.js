'use strict';

const toAbbreviate = (str) => {
    let first = 0, second, abbreviate = [];
    let pattern = /\s/g;
    let found = pattern.exec(str);
    if (found){
        second = found.index + 1;
    }

    abbreviate[0] = str.split('')[first].toUpperCase();
    abbreviate[1] = '.';
    abbreviate[2] = str.split('')[second].toUpperCase();
        
    return abbreviate.join('');
}

console.log(toAbbreviate('Sam Harris'));
console.log(toAbbreviate('Patrick Feeney'));
