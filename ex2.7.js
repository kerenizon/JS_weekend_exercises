'use strict';

const basicOp = (operator, operand1, operand2) => {
    let result;
    switch(operator){
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }
    return result;
}

console.log(basicOp('+',2,6));
console.log(basicOp('*',2,6));
console.log(basicOp('-',2,6));
console.log(basicOp('/',2,6));