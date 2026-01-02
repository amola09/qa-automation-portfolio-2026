// Union Type
// can combine multiple data types using | .
// | pipe, or operator

// Syntax: let/var/const variableName: datatype1 | datatype2 = value;

// let x: number = 20;
// console.log(x); // 20
// x = "Hi"; // error TS2322: Type 'string' is not assignable to type 'number'.

let u: number | string = 50; // union type
console.log(u); // 50
u = "Hello";
console.log(u); // "Hello"