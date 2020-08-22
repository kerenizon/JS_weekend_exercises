'use strict';

const binaryToDec = (binaryArr) => {
    let decimailNum = 0;
    for(let i = binaryArr.length-1; i >=0; i--){
        decimailNum += Math.pow( 2 , (binaryArr.length-1) - i) * binaryArr[i];
    }
    return decimailNum;
}

console.log(binaryToDec([1,1,1]))