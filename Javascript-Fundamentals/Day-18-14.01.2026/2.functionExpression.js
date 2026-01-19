/* 
2. function Expression (Anonymous function) : No Name

Syntax:

let/var/const variableName = function(para1, para2,...){}

Here,
variableName --> variable
function(para1, para2,...){} --> variable value


variable phases:
    declaration
    initialization


    EC have 2 phases:>  1. Memory creation   2. Code execution
*/

// Function expression cant call before the function declaration, bcoz of var, let & cost 

// console.log(funTwo) // ReferenceError: Cannot access 'funTwo' before initialization

// let funTwo = function (para1, para2) {
//     console.log(para1, para2)
// };

// funTwo(1, 1); // 1 1


// console.log(funTwo) // undefined

// var funTwo = function (para1, para2) {
//     console.log(para1, para2)
// }

// funTwo(1, 1); // 1 1



// function expression without return
// If return not present in BOC the default value are undefined

let fun3 = function (para1, para2) {
    console.log(para1 + para2);
   //return para1+para2
}
console.log(fun3(2, 2)) // undefined


// function expression with return
// function calling holds value of return

// let fun4 = function (para1, para2) {
//     return para1 + para2;
// }
// console.log(fun4(2, 2)) // 4

let add = function(a,b){
    return a+b
}
let result1 = add(2,2)
console.log(result1)

let sub = function(x,y){
    return x - y
}
let result = sub(10, 5);
console.log(result)