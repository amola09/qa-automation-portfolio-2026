// 2. Globally Defined Variables in JavaScript:

// Globally means anywhere in code
// in js everything is an object

// Object :-

// Global Object --> Window object
// Window object is only accessible in browser environment
// In node js global object is called global        

/* 
Have global object nested structure like below:

{
      {
                let / const / var  a = "Hi";

                {     }
     }
}


*/

/* 
let obj = {
    a: 10,
    log() {
    }
}
console.log(obj.a); // 10
*/


var varVariable = "varVariable";
console.log(varVariable); // varVariable
console.log(window.varVariable) // varVariable
// variable declared with var keyword becomes property of window object
// that's why we are able to access varVariable using window.varVariable (Able to access in globally)

let letVariable = "letVariable";
console.log(letVariable) // letVariable
console.log(window.letVariable) // undefined
// variable declared with let keyword does not become property of window object
// that's why we are not able to access letVariable using window.letVariable (Not able to access in globally)

const constVariable = "constVariable";
console.log(constVariable) // constVariable
console.log(window.constVariable) // undefined
// variable declared with const keyword does not become property of window object
// that's why we are not able to access constVariable using window.constVariable (Not able to access in globally)