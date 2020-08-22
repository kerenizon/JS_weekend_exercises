'use strict';

 const findUniq = (arr) =>{
    let result, commonVal = undefined;
    arr.sort( (a,b) => (a === b) && (commonVal = a)); // sort function: to compare each two adjecent elements and assign the common value in the array to 'commonVal'

    if (commonVal !== undefined){
        result = arr.find((element) => (element !== commonVal)); //find the unique element in the array which different from 'commonVal'
    }else{    //in case of array like that: [1,2,1] when 'commonVal' is undefined
        result = arr[1];
    }
   
    return result;
 } 

 console.log(findUniq([0,0,3]));
 console.log(findUniq([1,1,1,1,1,2,1,1]));


