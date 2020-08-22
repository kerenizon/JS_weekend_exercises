'use strict';

const Fibonacci01 = (num) =>{
    let newArr = [0,1];
    if(num === 1){
        return 0;
    } else if (num === 2){
        return 1;
    }else{
        for(let i=2;i < num; i++){
            newArr.push(newArr[i-1] + newArr[i-2]);
        }
        return newArr[num-1];
    }
}

const Fibonacci11 = (num) =>{
    return Fibonacci01(num+1); 
}

console.log(Fibonacci01(11));
console.log(Fibonacci11(11));