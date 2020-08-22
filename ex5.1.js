'use strict';

const trimmingStr = (str) => {

    return str.split('').slice(1,str.length-1).join("");
}

console.log(trimmingStr('abcdef'));