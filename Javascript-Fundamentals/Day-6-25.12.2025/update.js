// re-assign/ update variable value / change variable value / modify variable value:

// var keyword: can re-assign/ update variable value with var keyword
var a = 10;
console.log(a); // 10
a = "js" // --> a update/ re-assign,
console.log(a); // js

// let keyword: can re-assign/ update variable value with let keyword
let b = 20;
console.log(b);
b = "js" // --> a update/ re-assign,
console.log(b);


// const keyword: cannot re-assign/ update variable value with const keyword
const c = 10;
console.log(c); // 10
//c = "js" // --> TypeError: Assignment to constant variable.
console.log(c); // js
// value not able to update/re-assign

// Note: const keyword variable must be initialized during declaration
// can mutate the object or array elements but cannot re-assign the object or array itself