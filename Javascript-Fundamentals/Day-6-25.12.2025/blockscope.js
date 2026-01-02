// var variable scope --> Global, Function
// let variable scope--> Global, Function, Block
// const variable scope --> Global, Function, Block

// Global, function, block scope

// block scope:
// condition block: if block, if condion statement
// if (statement) {
//     // block scope
// }


// var keyword:
// var a = 10; // Global Scope
// if (true) {
//     // block scope
//     var b = 20; // block Scope
// }

// console.log(a); // 10
// console.log(b); // 20 

//  var keyword has no block scope
// can access b variable outside the block


// let keyword:
let a = 10; // Global Scope

if (true) {
    // block scope
    let b = 20; // block Scope variable
}

console.log(a); // 10
//console.log(b); // 20 // ReferenceError: b is not defined

// let keyword has block scope
// cannot access b variable outside the block


// const keyword:

const b = 20
if(true){
    const b = 30
}
console.log(b)

// const keyword has block scope
// cannot access b variable outside the block