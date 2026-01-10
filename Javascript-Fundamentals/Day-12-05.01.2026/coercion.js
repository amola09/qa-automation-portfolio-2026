// js datatypes: string, number
// string literal type
let an = "Hello JS"

// number literal type
let b1 = 100
console.log(b1, typeof b1) // 10 number

// class type
let b = Number(120)
console.log(b, typeof b) // 10 number



// --------------------------------
// As per he corecion rules:
// Comparision and arithmetic operators are converting operands in number datatype (> < >= <= - * /)
// If not able to convert number value the value will be NaN.

// console.log(10 - "Js"); // NaN
// // "Js" --> NaN
// console.log(Number("Js")) // NaN
// 10 - NaN --> NaN


// logical operators and if() converting into boolean datatype ( if`, `!`, `&& )

console.log(!0) // true


//--------------------------------------
// + operator:

// + with Unaray operation: Always converting value in number datatype, If not able to convert value the value will be NaN

let a = +"10";
console.log(a, typeof a); // 10 number

let a2 = +"hi";
console.log(a2, typeof a2); // NaN number

let a3 = +true;
console.log(a3, typeof a3); // 1 number

let a4 = +null;
console.log(a4, typeof a4); // 0 number

let a5 = +undefined;
console.log(a5, typeof a5); // NaN number


// + with binary operation: if both operand getting number the addition operation will be perform otherwise string concatination 

// number + number : number
// number + string : string
// string + number : string
// string + string : string
// boolean + string : string

// + with boolean:
// console.log(true + false) // 1
// true --> 1
// false --> 0
// 1 + 0 = 1

console.log(true + 1) // 2
console.log(true + "") // 'true' --> string concatination


// ------------------------------
// === : no corecion with string equality
console.log("10" === 10) // false

// ----------------------------
// == : loss equality => datatype conversion are depends on the operator. 

console.log("10" == 10) // true
// == operator only checking values

console.log(false == 0) // true

// Have 2 possibility for datat conversion:
// 0 == 0 ---> true
// false == false

console.log(Number(false))  // 0
console.log(Boolean(0)) // false

// But preferance is getting to convert datatype in base datatype which is number datatype
// base datatype --> number

// console.log("Hi" == 0) // false
// values are not same

console.log(null == undefined) // true : values are same 
console.log(null === undefined) // false : datatypes are not same

// == with : string == boolean

console.log("hi" == true) // false
// NaN == 1
// value comparision bt NaN and actual any number will be false
console.log("hi" == false) // false
// datatype converting in number
// "hi" --> NaN
// true --> 1
// false --> 0

// == with : boolean == number
console.log(0 == true) // false
// 0 == 1 --> false


console.log([] == []) // false
console.log([] == {}) // false

