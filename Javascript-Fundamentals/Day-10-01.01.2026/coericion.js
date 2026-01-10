/* 
+  : converting datatype in number

What is Corecion ?
Forcefully datatype conversion for perform operation.

Why is Corecion ?
Able to perform mathematical operations

Why converting in only number ?
To perform mathematical operations we required values from number datatype

*/

let a = +"10" // string
console.log(typeof a) // number

let b = +"Hi" // string
console.log(b, typeof b) // NaN, number


let c = -"22"
console.log(c, typeof c) // -22 number

let d = +true
console.log(d, typeof d) //1 number

let f = -false
console.log(f,typeof f) // -0 number

let o = +{}
console.log(o, typeof o) // NaN
let arr = -[10,20]
console.log(arr,typeof  arr) // NaN
