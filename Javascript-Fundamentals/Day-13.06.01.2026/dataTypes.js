/* 

# JS datatypes:

1. Primitive Data types(6):- immutable(can't update original value)
    1. string 
    2. Boolean
    3. Undefined
    4. Null
    5. Number
    6. Bigint
    7. Symbol
    
2. Non- Primitive data types:- mutable (can update original value)
    1. Object (E.g.Date,);
    2. Array
    3. Function  
    4. RegEx  
*/



// primitive(immutable) : value cant modify
// Non primitive(mutable) : value can modify

let a = 10
// value cant modify

let arr = [1, 3, 3]
arr[1] = 4
// value can be modify


/* 
1. Primitive Data types(6):- immutable(can't update original value)
    1. string 
*/

// literal type:
let str = "javaScript"
// ' ', " ", ` `
// typeof:
// action: finding datatype
// return: string

console.log(typeof str) // string

str = 'javaScript'
console.log(typeof str) // string

str = `javaScript`
console.log(typeof str) // string

// class: 
let str2 = String(true)
console.log(str2, typeof str2) // true string

// -------------------
//  2. Boolean --> true false

// literal
let flag = true;
console.log(flag, typeof flag); // true boolean

// class
flag = Boolean("");
console.log(flag, typeof flag); // false boolean

// 3. Undefined 
// Undefined : absense of value
// property of global object
// function: 
// Undefined

console.log(undefined, typeof undefined); // undefined undefined

// 4. null
// value : null, datatype: object
// absense of value
// can return null

console.log(null, typeof null); // null object


//  5. Number:
// literal
let num = 10 // +ve numbers, -ve, 0
console.log(num, typeof num); // 10 number

// class
num = Number(100)
console.log(num, typeof num); // 100 number

num = Number("Hi")
console.log(num, typeof num); // NaN number


//  6. Bigint

console.log(999999999999999);
// 999999999999999

console.log(9999999999999999);
// 10000000000000000

let bigNum = 9999999999999999n;
console.log(bigNum, typeof bigNum); // 9999999999999999n bigint

let objNew = Object.create({keyName:10})
console.log(objNew)