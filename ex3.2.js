'use strict';

const bus = [{getInto: 2 ,getOff: 0} , {getInto: 5,getOff: 3} , {getInto: 1,getOff: 1} , {getInto: 8,getOff: 3}];

const stillInTheBus = (arrObj) => {
    let peopleGetInto = 0, peopleGetOff = 0;
    for(const element of arrObj){
        peopleGetInto += element.getInto;
        peopleGetOff += element.getOff;
    }
    return peopleGetInto - peopleGetOff;
}

console.log(stillInTheBus(bus));