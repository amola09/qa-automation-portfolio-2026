/* 
function:
Type of function: 3

How we can annotate ?
Annotate with interface ?

1. function Delaration:

literal
function functionName(para1:type, para2:type, ..., paran:typen): returnType{}

2. function expression:

literal type
let funName = function(para1:type, para2:type, ..., paran:typen):returnType{}
*/

// literal
let funOne1 = function (para: number): number {
  console.log("I am funOne");
  return para;
};

console.log(funOne1(4));
/* 
I am funOne
4
*/

/* 
type alise syntax:
(para1:type, para2:type, ..., paran:typen) => returnType
*/

 type funType = (para: number) => number;

let funOne2: funType = function (para) {
  console.log("I am funOne");
  return para;
};

console.log(funOne2(4));
/* 
I am funOne
4
*/

// interface for function:

interface funInterface {
  // (para1:type, para2:type, ..., paran:typen): returnType
  (para: number): number;
}

let funOne3: funInterface = function (para) {
  console.log("I am funOne");
  return para;
};

console.log(funOne3(4));

/* 
I am funOne
4
*/