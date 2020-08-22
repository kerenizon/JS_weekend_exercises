'use strict';

const myForEach = (arr, forEachFunc) => {
    for(let i=0;i<arr.length;i++) { 
        arr[i] = forEachFunc(arr[i], i, arr);   
    }  
    return arr;
}

const myMap = (arr, mapFunc) => {
    const mapArr = [], result; 
    for(let i=0;i<arr.length;i++) { 
        result = mapFunc(arr[i], i, arr);  
        mapArr.push(result); 
    }  
    return mapArr;
}

const myFilter = (arr, filterFunc) => {
    const filterArr = [], result; 
    for(let i=0;i<arr.length;i++) { 
        result = filterFunc(arr[i], i, arr);  
        (result) && filterArr.push(arr[i]); 
    }  
    return filterArr;
}

