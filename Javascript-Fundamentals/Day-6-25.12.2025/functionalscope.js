// var variable scope --> Global, Function
// let variable scope--> Global, Function, Block
// const variable scope --> Global, Function, Block

// var keyword:

// var a = 10; // Global Scope/ Script Scope

// function funOne() {
//     console.log(a); // 10
//     var b = 20; // Function Scope
// }

// funOne();
// console.log(b); // ReferenceError: b is not defined

// var keyword has function scope
// cannot access b variable outside the function


// let keyword:
let a = 10; // Global Scope/ Script Scope

function funOne() {
    console.log(a); // 10
    let b = 20; // Function Scope
}

funOne();
console.log(a);
//console.log(b); // ReferenceError: b is not defined

// let keyword has function scope
// cannot access b variable outside the function

// const keyword:

const x = 10

function funTwo(){
 //console.log(x)
 const y = 20
 console.log(y)   
}
funTwo()
// console.log(y) // y is not defined 