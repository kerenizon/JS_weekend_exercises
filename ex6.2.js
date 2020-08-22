'use strict';

const countDuplicates = (str) => {
    let letterCounter = {};
    let strArr = str.split('');
    let result = '', counter = 0;

    for(let i=0; i< strArr.length; i++){
        letterCounter[strArr[i].toLowerCase()] = letterCounter[strArr[i].toLowerCase()] + 1 || 1;
    }
    
    for (const [key,value] of Object.entries(letterCounter)){
        if (value > 1){
            (counter += 1);
            result += `${key} occurs ${value} times `;
        }
    }
    
    if (counter === 0){
        console.log('0 # no characters repeats more than once');
    } else {
        console.log(`${counter} # `+ result);
    }
}

countDuplicates('abcde');
countDuplicates('aabbcde');
countDuplicates('indivisibility');
countDuplicates('Indivisibilities');
countDuplicates('aA11');
countDuplicates('ABBA');