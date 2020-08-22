'use strict';

const maskify = (str) => {
    let mask;
    if (str.length <= 4){
        return str;
    }else{
        mask = '#'.repeat(str.length-4);
        mask = mask + str.slice(str.length-4);
    }
    return mask;
}

console.log(maskify('4556364607935616'));
console.log(maskify('7935236'));
console.log(maskify('1'));
console.log(maskify(''));