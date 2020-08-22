'use strict';

const isIsogram = (str) => {
    let strArr = str.toLowerCase().split('');
    let sortedArr = strArr.sort();
    if (str === ''){
        return true;
    } else{
        for (let i=1; i< sortedArr.length; i++){
            if (sortedArr[i] === sortedArr[i-1]){
                return false;
            }
        }
        return true;
    }
}

console.log(isIsogram(''));
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
