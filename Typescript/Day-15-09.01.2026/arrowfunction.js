/*
literal type syntax for the arrow function
let funName = (para1:type, para2:type, ..., paran:typen):returnType{}
*/
// function expression
var funE = function () {
    return 5;
};
console.log(funE());
// Arrow function short syntax:
var arrFu = function () { return 5; };
console.log(arrFu());
/*
# Try for arrow function:
    1. Annotate arrow function with the literal type
    2. use type alise for the arrow function to type annotation
    3. use interface for the arrow function to type annotation
*/
/*
On the project base root path execute the command:

tsc --init

will generate the 'tsconfig.json' file, with the help of this can able to set configuration for project

*/
