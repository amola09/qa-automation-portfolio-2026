// array type:
let c = 10;

// let a = [10, 20, 30, 40];
//        0  1   2   3

// Syntax for array type annotate:
// let/var/const variableName: type[] = [values];

let a: number[] = [10, 20, 30, 40];
let b:number[] = [50,60,70,80]
console.log(a)
console.log(b)


// let aa: string[] = [10, 20, 30, 40]; // Type 'number' is not assignable to type 'string'.
let aa: string[] = ["10", "20", "30", "40"];

console.log(aa)

// Array annotation:
let aa1: Array<string> = ["11", "12", "13", "14"];
console.log(aa1)
// can add multiple types in array:
let aaa: (string | number)[] = ["10", "20", 30, 40];
console.log(aaa)