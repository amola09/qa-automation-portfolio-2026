// RegEx: Regular Expression
// pattern identification --> promt --> RegEx code

/* 
Syntax: 
1. literal

 = /value/flag
 flag: i, g, m

*/

// literal:
let varOne = /hi/i

console.log("RegEx: ", varOne); // RegEx:  /hi/i
console.log(typeof varOne) // Object

/* 
2. class

= RegExp(aug1, aug2)

aug1: value
aug2: flags

*/

let varTwo = RegExp("hi", "i");
console.log("RegEx: ", varTwo); // RegEx:  /hi/i
console.log(typeof varTwo) // Object



