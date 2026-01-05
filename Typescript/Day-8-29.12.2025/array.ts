// array type:
//let arr1 = 10;

// let a = [10, 20, 30, 40];
//        0  1   2   3

// Syntax for array type annotate:
// let/var/const variableName: type[] = [values];

// let arrOne: number[] = [10, 20, 30, 40];
// let arrTwo:number[] = [50,60,70,80]
// console.log(arrOne)
// console.log(arrTwo)


// let aa: string[] = [10, 20, 30, 40]; // Type 'number' is not assignable to type 'string'.
let arrThree: string[] = ["10", "20", "30", "40"];

console.log(aa)

// Array annotation:
let arrFour: Array<string> = ["11", "12", "13", "14"];
console.log(arrFour)
// can add multiple types in array:
let arrFive: (string | number)[] = ["10", "20", 30, 40];
console.log(arrFive)