/* 
# Function: Block of code designed to get particular output.
               - functions are the first class citizen of js.
               - functions are heart of js.

    # use/need of function:
        1. avoid repetative code (reuseibility)
        2. split of code.       


# types of function:
1. function Declaration (named function)
2. function Expression (Anonymous function)
3. Arrow function : ES6 feature



1. function Declaration (named function)

Syntax:

function functionName () {}

function functionName (parameter1, parameter2, ...) --> function declaration
{ start of block

            Block of code --> function defination

} --> function block

# function calling:
    functionName()
    functionName(arug1, arug2)


    # functions 3 parts:
    1.function decleration
    2.function defination
    3.function calling

    Q. what is the function parameters ?
       Parameters are block of code variables

    Q. what is the function arguments ?
       Values for the paramers initialization
*/

// function declaration: without parameters
// function funOne() {
//     console.log(10 + 10)
//    with same number operation
// }
// funOne()
// funOne()
/* 
parameters: variables for BOC
*/

// Addition operation with different numbers

// 10, 20
// 20, 23
// 25, 12

// function funOne() {
//     console.log(100 + 20)
// }
// funOne()

// function funOne() {
//     console.log(200 + 23)
// }
// funOne()

// function declaration: with parameters
function funOne(x, y) {
    console.log(x + y)
}
// arguments
funOne(15, 10)
funOne(13, 20)

// code write
// code execute --> EC

// 2 phases: