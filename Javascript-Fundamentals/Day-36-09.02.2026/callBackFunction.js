/*
 3 type of functions:

        1. declaration
        2.  Expression
        3.  Arrow
*/

// 1. declaration:
function fun(preVal, ele, ind, arr) {
    return preVal + ele // 25
};
let output = arr.reduce(fun, 10);
console.log(output); // 25

// 2.  Expression:
let fun = function (preVal, ele, ind, arr) {
    return preVal + ele // 25
};
// output = arr.reduce(fun, 10);
output = arr.reduce(function (preVal, ele, ind, arr) {
    return preVal + ele // 25
}, 10);
console.log(output); // 25


// 3.  Arrow:
fun = (preVal, ele, ind, arr) => preVal + ele; // 25
output = arr.reduce(fun, 10);
console.log(output); // 25