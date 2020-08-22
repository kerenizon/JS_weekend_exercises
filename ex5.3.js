'use strict';

const replaceSymbol = (str, symbol) => {
    let index = 0;
    let newStr = str.split('');
    while(index <= str.length){
        index = str.indexOf(symbol,index);
        if (index !== -1) {
            newStr[index] = '';
            newStr[index + 1] = str.charAt(index + 1).toUpperCase();
            index = index + 1;
        } else{
            break;
        }
    }
    return newStr.join("");
}

const toCamelCase = (str) => {
    str = replaceSymbol(str, '-'); 
    str = replaceSymbol(str, '_'); 
    return str;
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));