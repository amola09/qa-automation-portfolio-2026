/* 
array in js ?
Non-primitive datatype in js, which can hold multipal values(list) from different datatypes on the index number.

list:
[value1, value2, ..., valuen]

*/

let t = 100;
let obj = {
    key: value,
    methodOne(){}
}

// retrive object value:
obj['key']


// // syntax: literal
// let array = [value, value2, ...]

let arr = [10, 10, 12, 1, 2];
//         0    1   2  3  4
//        -5   -4  -3 -2  -1

// array -ve indexing 

// address: index number
// always index 0 start & -1

// CURD

// Retrive/ get values
// Dot, bracket
// Array bracket notation can retrive values

console.table(arr)
console.log(arr[0]); // 10
console.log(arr[-5]); // undefined
console.log(arr[3]); // 1
console.log(arr[-2]); // undefined

// // Update:
arr[0] = 100
console.table(arr)
console.log(arr[0]); // 100

// // Delete:
console.log("Length Before", arr.length)
delete arr[3]
console.table(arr)
console.log("Length After", arr.length)

console.log(arr[3]); // undefined
// // empty holes

// arrray have default properties and methods:
// length: Propert of array
// Action: Finding array length
// Retrurn: Number


// // class
let arr2 = Array(5)
console.table(arr2)
console.log(arr2.length)

// Array.form()
let arr3 = Array.from([15, 22, 11]);
console.table(arr3);
console.log(arr3.length) // 3