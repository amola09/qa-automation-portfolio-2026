/* 
# Lexical Scope: 
   -The scope of a variable is determined by its location within the source code and nested functions have access to variables declared in their outer scope.

# Closure: 
   -A closure is an inner function that has access to its outer function's variables even after the outer function's execution is Completed/Closed.
   -A function that retains access to its lexical scope even when it is executed outside of that lexical scope. e.g. counter
*/

// Parent/outer funtion
function funOuter() {
    console.log("I am funOne")
    let a = 1;

    // Child/Inner funtion
    function funInner() {
        console.log(a) // 1
        // can access a bcoz of lexical scope
        console.log("I am funTwo")
    };
    // funInner
    // funInner()
    return funInner;
};

let returned = funOuter();
console.log(returned)
// call function: functionName()

// Inner function calling
returned();



console.log("*************************")





function outerFun(){
    let x = 12
    console.log("Outer function excecuted")
    function innerFun(){
        console.log("Inner function excecuted")
        console.log(x)
    }
       innerFun()
    return innerFun
}
let return1 = outerFun()
console.log(return1)
