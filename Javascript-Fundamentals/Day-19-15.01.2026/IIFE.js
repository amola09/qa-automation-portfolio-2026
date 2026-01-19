/* 
4. self invoke function/ IIFE

IIFE : (Immediately Invoked Function Expression) or self calling/incoke function
   -The function is invoked Immediately after the declaration
   -If we have to exceute a block of code only once, IIFE can be used
   -self invoked functions cann't be invoked more than once.

Syntax:
        vlaue()
        (function(){})()

*/

// let fun1 = function () {
//     console.log("Block of code")
// }

// // function calling/ function invoke
// console.log(fun1)
// fun1()
// // value()

(function () {
    console.log("I am IIFE : Block of code")
})();

(function(){
    console.log("JS")
})()