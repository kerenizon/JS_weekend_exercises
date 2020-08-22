'use strict';

const longest = (str1,str2) => {
    let sortedStr = (str1+str2).split('').sort();
    let uniqueArr = sortedStr.filter((letter,index,arr) =>{
        return (arr[index] !== arr[index-1]) && letter; 
    }); 
    return uniqueArr.join('');
}

console.log(longest('abcd','abcd'));
console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'));
