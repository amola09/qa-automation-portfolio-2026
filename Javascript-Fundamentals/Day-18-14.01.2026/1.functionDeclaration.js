// Function Declaration with parameters:

// Can call function declaration before the function defination, bcoz function declaration are fully hoisted in 
// 1. memory creation phase

funOne(10, 10); // 20 > Before calling

function funOne(a, b) {
    console.log(a + b)
};

// funOne(1, 1); // 2 > After calling

// funOne is a function name which acting as a variable whos holding function as a value
console.log(funOne); // [Function: funOne]

// EC have 2 phases:>  1. Memory creation   2. Code execution
// At time of code execution function declaration getting fully hoisted 
// at time of memory creation phase hence we can able to call it before the function declaration

// Check for return keyword

function add(a, b) {
  return a + b;
}

// function call stores the returned value
let result = add(7, 3);
console.log(result); // 10