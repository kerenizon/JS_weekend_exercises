'use strict';

const accum = (str) => {
    let newStr = '';
    let strArr = str.split('');
    for(let i=0; i< strArr.length; i++){
        newStr += strArr[i].toUpperCase();
        i && (newStr += strArr[i].toLowerCase().repeat(i));  
    }
    return newStr;
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));
