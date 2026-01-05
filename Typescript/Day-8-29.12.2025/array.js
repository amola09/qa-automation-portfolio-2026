// array type:
var c = 10;
// let a = [10, 20, 30, 40];
//        0  1   2   3
// Syntax for array type annotate:
// let/var/const variableName: type[] = [values];
var a = [10, 20, 30, 40];
var b = [50, 60, 70, 80];
console.log(a);
console.log(b);
// let aa: string[] = [10, 20, 30, 40]; // Type 'number' is not assignable to type 'string'.
var aa = ["10", "20", "30", "40"];
console.log(aa);
// Array annotation:
var aa1 = ["11", "12", "13", "14"];
console.log(aa1);
// can add multiple types in array:
var aaa = ["10", "20", 30, 40];
console.log(aaa);
