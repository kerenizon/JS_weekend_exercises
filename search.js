'use strict';

const linearSearch = (arr, value) => {
    for(let i=0; i< arr.length; i++){
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([1,15,20,3],20))


//iterative approach
const binarySearch = (sortedArr, value) => {
    let mid, start = 0, end = sortedArr.length-1;
    
    while(start <= end){
        mid = Math.floor((start + end)/2);
        if(sortedArr[mid] === value){
            return true;
        }else if(sortedArr[mid] < value){
            start = mid + 1;
        }else{
            end = mid - 1; 
        }
    }

    return false;
}  

console.log(binarySearch([1,3,15,20],20))

