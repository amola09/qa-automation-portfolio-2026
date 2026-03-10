/* 
    Everything in js is an object:

               Object --> InBuild js class
                  |
   String, Number, boolean, null, undefined, array, function ---> InBuild js class
                  |
              Instances

*/

// Number --> inbuild class
let a = 10;
console.log(a, typeof a); // 10 number

// Object --> inbuild class
let obj = {
}
console.log(obj)

// Array --> inbuild class
let arr = []

// String --> inbuild class
let str = "String"


/* 

prototype:
-Prototype is class inbuild property who have object value.
-Prototype is inbuild object which is inbuild attached to every instance object in javascript.

class/constructor: String, Number, boolean, null, undefined, array, function ---> InBuild

*/

// console.log(Array)
// console.log(Array.prototype)

// console.log({})
// console.log(Object.prototype)


/* 
__proto__ ==> is a instance property. Its return instance constructor/class prototype.

*/

console.log(" __proto__ ")

let obj1 = {} // Object
console.log(obj1.__proto__)

let arr2 = [] // Array
console.log(arr2.__proto__)


// Relation bt prototype & __proto__

// array
console.log(arr2.__proto__)
console.log(Array.prototype)
console.log(arr2.__proto__ === Array.prototype); // true

// object
console.log(obj1.__proto__)
console.log(Object.prototype)
console.log(obj1.__proto__ === Object.prototype); // Object


/* 
        [] --> Array --> class/constructor (Object)
*/
console.log(arr2.__proto__.__proto__ === Object.prototype); // true

// Prototype chain : Prototype chain ends at null
console.log(arr2.__proto__.__proto__.__proto__); // null