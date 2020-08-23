'use strict';

function squared(b) {
	return b * b;
}

function findPerimeter(a, b){
    return 2*a + 2*b;
}

// What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA)
// the result: [ 42, 1, 2, 3, 4, 5 ] because the '=' assignment assign the reference of the array so any change in arrA will affect arrB



// What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA)
// the result doesn't change because slice is immutable method and create a copy of the original array



// What would be the output of following code?
var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);
// the result: [ { prop1: 42 }, { someProp: 'also value of array A!' }, 3, 4, 5 ]
// the assignmetn '=' of objects assign the reference of the array so any change in arrA will affect arrB



// What would be the output of following code?
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);
// the result: [ { prop1: 42 }, { someProp: 'also value of array A!' }, 3, 4, 5 ]
// the slice method create a different copy of the original array but it's shallow copy:
// it means the the objects and properties inside points to the same reference