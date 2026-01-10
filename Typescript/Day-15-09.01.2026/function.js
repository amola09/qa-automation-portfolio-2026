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
var funOne1 = function (para) {
    console.log("I am funOne");
    return para;
};
console.log(funOne1(4));
var funOne2 = function (para) {
    console.log("I am funOne");
    return para;
};
console.log(funOne2(4));
var funOne3 = function (para) {
    console.log("I am funOne");
    return para;
};
console.log(funOne3(4));
/*
I am funOne
4
*/ 
