/* 
3. Arrow function : ES6 feature

Syntax: var/let/const variableName = () => { }

# Arrow function advantages over the other function:
  1. Short syntax
  2. can return BOC (1 line) without return keyword
  3. 'this' scope

*/

// let funOne = () => {
//     console.log("I am arrow");
// };
//  funOne(); // I am arrow

// with return keyword:
let fun1 = () => {
    return "I am arrow"
};

let returnedValue = fun1();
console.log(returnedValue) // I am arrow


// arrow function can return without return keyword:
let fun2 = () => "I am arrow";

let returnedValue2 = fun2();
console.log(returnedValue2) // I am arrow


let add = (b,c)=>{
    return b + c
}
let result = add(3,3)
console.log(result)