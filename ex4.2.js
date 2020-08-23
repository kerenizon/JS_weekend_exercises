'use strict';

const Tribonacci01 = (num) =>{
    let newArr = [0,0,1];
    if((num === 1) || (num === 2)){
        return 0;
    }else if (num === 3){
        return 1;
    }else{
        for(let i=3;i < num; i++){
            newArr.push(newArr[i-1] + newArr[i-2] + newArr[i-3]);
        }
        return newArr;
    }
}

const Tribonacci11 = (num) =>{
    let newArr = [1,1,1];
    if((num === 1) || (num === 2) || (num === 3)){
        return 1;
    }else{
        for(let i=3;i < num; i++){
            newArr.push(newArr[i-1] + newArr[i-2] + newArr[i-3]);
        }
        return newArr;
    } 
}

console.log(Tribonacci01(8));
console.log(Tribonacci11(8));