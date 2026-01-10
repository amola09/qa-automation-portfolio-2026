/* 
    +  : converting datatype in number

    What is Corecion ?
    Forcefully datatype conversion for perform operation.

    Why is Corecion ?
    Able to perform mathematical operations

    Why converting in only number ?
    To perform mathematical operations we required values from number datatype

*/

// string addition called as string concatination:
// console.log(1 + 1) // 2

// console.log("Hi" + "Js") // HiJs

// console.log(10 + "Js") // 10Js

// console.log(10 + "1"); // 101

// Corecion with + operator:
// console.log(10 + +"1"); // 11

// Corecion 
console.log(10 - "1"); // 9
console.log(10 - "Hi"); // NaN
console.log(10 * "1"); // 10

// / % **

console.log(10 - "Js"); // NaN

console.log(10 > "Js"); // false
// Always string converts in number datatype
// "Js" --> NaN
//Always comaprision with NaN is false

console.log('10' < "Js"); 

/* 
    '10' is a string

    "Js" is a string

    JavaScript compares them character by character using Unicode values

    Comparison starts with the first character:

    '1' → Unicode 49

    'J' → Unicode 74

    49 < 74  → true
*/