'use strict';

const sumTwoLowest = (arr) => {
    arr.sort(function(a,b){ return a-b});
    return arr[0] + arr[1];
}

console.log(sumTwoLowest([5,3,8,10,7,10,1]));