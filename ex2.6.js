'use strict';

const centuryFromYear = (year) =>{
    let century;
    if(year % 100 >= 1){
        century = Math.floor((year/100)) + 1;
    }else{
        century = Math.floor((year/100));
    }
    return century;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));